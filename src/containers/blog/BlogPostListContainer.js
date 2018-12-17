import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import *as postActions from 'store/modules/post';
import *as modalActions from 'store/modules/modal';
import *as editorActions from 'store/modules/editor';

import BlogPostList from 'components/BlogPostList';
import NoContents from 'components/common/NoContents';
//import Loading from 'components/common/Loading';


class BlogPostListContainer extends Component{
    componentDidMount(){
        const { PostActions, match, id, keyword } = this.props;
        if(match.url === `/post/${id}`){
            try{
                PostActions.getPost(id);
            }catch(e){
                console.log('GET_POST',e);
            }
        }//Post 한개 랜더링시
        else if(keyword){
            try{
                const { PostActions } = this.props;
                PostActions.getSearchList(keyword);
            }catch(e){
                console.log(e);
            }
        }//검색어에 의한 렌더링시
        else{
            const { query, tag } = this.props;
            const { page } = query;
            try{
                PostActions.getList(tag, page);
            }
            catch(e){
                console.log('GET LIST',e);
            }
        }
    }
    componentDidUpdate(prevProps){
        if( prevProps.query !== this.props.query){
            const { match } = this.props;
            if(match.url.indexOf('search')> -1){
                return; // Top 버튼눌렀을때 새로고침 방지..
            }
            window.location.reload();
        }//history.push 로 페이지 전환해도 새로고침이 안돼서 추가했음.
    }
    handleDelete = (id) => {
        const { PostActions, ModalActions } = this.props;
        PostActions.setPostId(id);
        ModalActions.showModal('delete');
    }
    handleRevise = (id) => {
        const { history} = this.props;
        history.push(`/blogEditor/${id}`);
    }
    render(){
        const { posts, onePost, logged, menuVisible, loading, keyword, match} = this.props;
        const { handleDelete, handleRevise } = this;
        if(loading){
            // return <Loading/> 로딩컴포넌트..
            return null;
        }
        if( posts.length === 0){// Search but No contents
            return(
                <NoContents/>
            )
        }
        console.log(match.url);
        return(
            <BlogPostList
             posts={posts}
             onePost={onePost}
             logged={logged}
             onDelete={handleDelete}
             onRevise={handleRevise}
             menuVisible={menuVisible}
             keyword={keyword}
             />
        )
    }
}

export default connect(
    (state) => ({
        posts : state.post.get('post').toJS(),
        onePost : state.post.get('onePost'),
        logged : state.modal.get('logged'),
        menuVisible : state.post.get('menuVisible'),
        loading : state.pender.pending['post/GET_LIST']
    }),
    (dispatch) => ({
        PostActions : bindActionCreators( postActions, dispatch),
        ModalActions : bindActionCreators( modalActions, dispatch),
        EditorActions : bindActionCreators( editorActions, dispatch)
    })
)(withRouter(BlogPostListContainer));
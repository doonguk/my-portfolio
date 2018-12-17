import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import BlogFooter from 'components/BlogFooter';
import *as postActions from 'store/modules/post';

class BlogFooterContainer extends Component {
    handlePrevious = () => {
        const { history, query, tag} = this.props;
        const { page } = query;
        if(!page || page === '1'){
            return;
        }else{
            history.push( tag ? `/tag/${tag}?page=${parseInt(page)-1}`: `/blog?page=${parseInt(page)-1}` );
            //tag 유무로 라우팅
        }
    }
    handleNext = () => {
        const { history, query, lastPage, tag } = this.props;
        const { page = 1 } = query; //page가 없다면 기본값은 1
        if( parseInt(page,10) === lastPage ){
            return;
        }else if(!page || page === '1'){
            history.push( tag ?`/tag/${tag}?page=2` : '/blog/?page=2');
        }
        else{
            history.push( tag ? `/tag/${tag}?page=${parseInt(page)+1}`:`/blog?page=${parseInt(page)+1}`);  
        }
    }

       
    render() {
        const { posts, isDisable1, isDisable2 } = this.props;
        const { handlePrevious, handleNext } = this;

        if(posts.length === 0) { //Search result 0 
            return null;
        }

        const { query, lastPage, PostActions } = this.props;
        const { page } = query;

        if( !page || page === '1'){
            PostActions.togglePreButton(); // pre버튼 disable true
        }
        if( parseInt(page,10) === lastPage || lastPage === 1 || lastPage === 0 ){
            PostActions.toggleNextButton(); // next버튼 disable true
        }
        return (
            <BlogFooter
            onPrevious={handlePrevious}
            onNext={handleNext}
            isDisable1={isDisable1}
            isDisable2={isDisable2}
            />
        );
    }
}

export default connect(
    (state) => ({
        lastPage : state.post.get('lastPage'),
        posts : state.post.get('post').toJS(),
        isDisable1 : state.post.get('isDisable1'),
        isDisable2 : state.post.get('isDisable2')
    }),
    (dispatch) => ({
        PostActions : bindActionCreators( postActions, dispatch )
    })
)(withRouter(BlogFooterContainer));
import React, { Component } from 'react';
import styles from './BlogTemplate.module.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import *as postActions from 'store/modules/post';

import BlogHeaderContainer from 'containers/blog/BlogHeaderContainer';
import BlogContent from 'components/BlogContent';
import BlogFooterContainer from 'containers/blog/BlogFooterContainer';
import DeleteModalContainer from 'containers/modal/DeleteModalContainer';
import BlogMenuBar from 'components/BlogMenuBar';
const cx = classNames.bind(styles);

class BlogTemplate extends Component{
    handleMenuBar = () => {
        const { PostActions } = this.props;
        PostActions.menuFalse();
    }
    componentDidUpdate(prevProps,prevState){
        const { PostActions } = this.props;
        if(prevProps.match.url !== this.props.match.url){
            PostActions.menuFalse();
        }
        if(prevProps.location.hash !== this.props.location.hash){
            PostActions.menuFalse();
            //메뉴바에서 submenu 클릭시 메뉴 false
        }
    }
    render(){
        const { menuVisible, query, params, match } = this.props;
        const animation = menuVisible ? 'enter' : 'leave';
        const { handleMenuBar } = this;
        if(match.url === `/post/${params.id}`){
            return(
                <>
                    <div className={cx('blog-template', animation)}>
                        <BlogHeaderContainer/>
                        <BlogContent onMenuBar={handleMenuBar} id={params.id}/>
                        <DeleteModalContainer/>
                    </div>
                    { 
                        menuVisible &&
                        <div className={cx('menubar', animation)}>
                            <BlogMenuBar/>
                        </div>
                    }    
                </>
            )
        }
        if(params.category || match.url === '/about' || match.url ==='/search'){
            return(
            <>
                <div className={cx('blog-template', animation)}>
                    <BlogHeaderContainer/>
                    <BlogContent onMenuBar={handleMenuBar}/>
                </div>
                { 
                    menuVisible &&
                    <div className={cx('menubar', animation)}>
                        <BlogMenuBar/>
                    </div>
                }    
            </>
            )
        }
        return( //기본 렌더링 + tag별 렌더링 
            <>
                <div className={cx('blog-template', animation)}>
                    <BlogHeaderContainer/>
                    <BlogContent query={query} onMenuBar={handleMenuBar} tag={params.tag} keyword={params.keyword}/>
                    { !params.keyword && <BlogFooterContainer query={query} tag={params.tag}/>}
                    <DeleteModalContainer/>
                   { params.keyword && <nav><a href="#search-top" className={cx('top-btn')}>Top</a></nav>}
                </div>
                { 
                    menuVisible &&
                    <div className={cx('menubar', animation)}>
                        <BlogMenuBar/>
                    </div>
                }
            </>
        )
    }
}

export default connect(
    (state) => ({
        menuVisible : state.post.get('menuVisible')
    }),
    (dispatch) => ({
        PostActions : bindActionCreators( postActions, dispatch )
    })
)(withRouter(BlogTemplate));
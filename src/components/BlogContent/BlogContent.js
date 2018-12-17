import React from 'react';
import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';
import {withRouter} from 'react-router-dom'

import BlogCategoryContainer from 'containers/blog/BlogCategoryContainer';
import BlogPostListContainer from 'containers/blog/BlogPostListContainer';
import BlogAbout from 'components/BlogAbout';
import BlogSearchContainer from 'containers/blog/BlogSearchContainer';

const cx = classNames.bind(styles);

const BlogContent = ({query, match, onMenuBar, id, tag, keyword}) => {
    if(match.url === '/blog/category'){ //카테고리 목록 렌더링
    return(
        <div className={cx('blog-content')} onClick={onMenuBar}>
            <BlogCategoryContainer/>
        </div>
        )
    }
    if(match.url === `/post/${id}`){ //post 랜더링
        return(
        <div className={cx('blog-content')} onClick={onMenuBar}>
            <BlogPostListContainer id={id}/>
        </div>
        )
    }
    if(match.url === '/about'){
        // About 페이지
        return(
            <div className={cx('blog-content')} onClick={onMenuBar}>
            <BlogAbout/>
            </div>
        )
    }
    if(match.url === '/search'){
        // Search 페이지
        return(
            <div className={cx('blog-content')} onClick={onMenuBar}>
                <BlogSearchContainer/>
            </div>
        )
    }
    return(
        <div className={cx('blog-content')} onClick={onMenuBar}>
            <BlogPostListContainer query={query} tag={tag} keyword={keyword}/>
        </div>
    )
}

export default withRouter(BlogContent);
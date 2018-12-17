import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogCategory from 'components/BlogCategory';
import *as postActions from 'store/modules/post';

class BlogCategoryContainer extends Component {
    componentDidMount(){
        const { PostActions } = this.props;
        PostActions.getList();
    }
    render() {
        const { posts } = this.props;
        return (
            <BlogCategory
            posts={posts}
            />
        );
    }
}

export default connect(
    (state) => ({
        posts : state.post.get('post').toJS()
    }),
    (dispatch) => ({
        PostActions : bindActionCreators( postActions, dispatch)
    })
)(BlogCategoryContainer);
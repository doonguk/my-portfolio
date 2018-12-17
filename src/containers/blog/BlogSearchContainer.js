import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogSearch from 'components/BlogSearch';
import *as postActions from 'store/modules/post';

class BlogSearchContainer extends Component{
    state = {
        value : ''
    }
    handleChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    handlePush = (uri) => {
        const { history } = this.props;
        history.push(`/post/${uri}`);
    }
    async componentDidMount(){
        const { PostActions } = this.props;
        try{
            await PostActions.getList();
        }catch(e){
            console.log(e);
        }
    }
    handleSearch = (keyword) => {
        const { history } = this.props;
        history.push(`/search/${keyword}`);
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleSearch(this.state.value);
        }
    }
    render(){
        const { value } = this.state;
        const { handleChange, handlePush, handleSearch, handleKeyPress } = this;
        const { posts } = this.props;
        console.log(value);
        return(
            <BlogSearch
            value={value}
            onChange={handleChange}
            onPush={handlePush}
            posts={posts}
            onKeyPress={handleKeyPress}
            onSearch={handleSearch}
            />
        )
    }
}

export default connect(
    (state) => ({
        posts : state.post.get('post').toJS()
    }),
    (dispatch) => ({
        PostActions : bindActionCreators( postActions, dispatch)
    })
)(withRouter(BlogSearchContainer));
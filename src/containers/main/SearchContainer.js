import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Search from 'components/Search';

class SearchContainer extends Component{
    state ={
        keyword : ''
    }
    handleChange = (e) => {
        this.setState({
            keyword : e.target.value
        })
    }
    handleSearch = (key) => {
        const { history } = this.props;
        const keyword = key.split('#')[1];
        history.push(`/tag/${keyword}`);
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleSearch(this.state.keyword);
        }
    }
    handlePush = () => {
        const { history } = this.props;
        history.push('/search');
    }
    render(){
        const { keyword } = this.state;
        const { handleChange, handleKeyPress, handleSearch, handlePush } = this;
        return(
            <Search
            keyword={keyword}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onSearch={handleSearch}
            onPush={handlePush}
            />
        )
    }
}

export default withRouter(SearchContainer);
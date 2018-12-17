import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as postActions from 'store/modules/post';
import LastUpdate from 'components/LastUpdate';

class LastUpdateContainer extends Component{
    state = {
        photo : null
    }
    async componentDidMount(){
        const { PostActions } = this.props;
        await PostActions.getList();
        
        //category 별로 사진
        const { category } = this.props.post[0];
        this.setState({
            photo : category.toLowerCase()
        })
    }
   
    render(){
        const { post } = this.props;
  
        const mapToPost = post.map( 
            (post) => {
                const { title, body, tags, publishedDate, _id } = post;
                return(
                    <LastUpdate
                    title={title}
                    body={body}
                    tags={tags}
                    publishedDate={publishedDate}
                    key={_id}
                    id={_id}
                    photo={this.state.photo}
                    />
                )
            }
        )
        return(
            <>
                {mapToPost}
            </>
        )
    }
}

export default connect(
    (state) => ({
        post : state.post.get('post').toJS()
    }),
    (dispatch) => ({
        PostActions : bindActionCreators(postActions,dispatch)
    })
)(LastUpdateContainer);
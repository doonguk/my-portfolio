import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as modalActions from 'store/modules/modal';
import *as postActions from 'store/modules/post';

import BlogHeader from 'components/BlogHeader';
class BlogHeaderContainer extends Component{
    componentDidMount(){
        const { ModalActions } = this.props;
        ModalActions.loginCheck().then().catch((e)=>{
            console.log(e);
        })
    }
    handleMenuBar = () => {
        const { PostActions } = this.props;
        PostActions.menuVisible();
    }
    render(){
        const { logged, menuVisible } = this.props;
        const { handleMenuBar } = this;
        return(
            <BlogHeader
            logged={logged}
            menuVisible={menuVisible}
            onMenuBar={handleMenuBar}
            />
        )
    }
}

export default connect(
    (state) => ({
        logged : state.modal.get('logged'),
        menuVisible : state.post.get('menuVisible')
    }),
    (dispatch) => ({
        ModalActions : bindActionCreators( modalActions, dispatch),
        PostActions : bindActionCreators( postActions ,dispatch)
    })
)(BlogHeaderContainer);
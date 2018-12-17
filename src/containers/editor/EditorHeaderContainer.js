import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';

import *as editorActions from 'store/modules/editor';
import *as modalActions from 'store/modules/modal';

import EditorHeader from 'components/EditorHeader';


class EditorHeaderContainer extends Component{
    componentDidMount(){
        const { EditorActions, id } = this.props;
        EditorActions.initialize();
        if(id){
            EditorActions.getPost(id);
        }
    }
    handleGoBack = () => {
        const { history } = this.props;
        history.goBack();
    }
    handleSubmit = () => {
        const { ModalActions } = this.props;
        ModalActions.showModal('write');
    }
    render(){
        const { handleGoBack, handleSubmit } = this;
        const { id } = this.props;
        return(
            <EditorHeader
            onGoBack={handleGoBack}
            onSubmit={handleSubmit}
            id={id}
            />
        )
    }
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        EditorActions : bindActionCreators( editorActions, dispatch),
        ModalActions : bindActionCreators( modalActions, dispatch)
    })
)(withRouter(EditorHeaderContainer));
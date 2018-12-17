import React , { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import *as modalActions from 'store/modules/modal';
import *as editorActions from 'store/modules/editor';

import WriteModal from 'components/modal/WriteModal';

class WritePostModalContainer extends Component{
    handleWrite = async(category) => {
        const { EditorActions, title, markdown, tags, history, id, ModalActions } = this.props;
        const post = {
            title,
            body : markdown,
            tags : tags === ""? [] : [...new Set(tags.split(',').map(tag=>tag.trim()))],
            category
        }
        try{
            if(id){
                await EditorActions.editPost({id,...post});
                ModalActions.hideModal('write');
                history.push('/blog');
                return;
            }
            await EditorActions.writePost(post);
            ModalActions.hideModal('write');
            history.push('/blog');
        }catch(e){
            console.log(e);
        }
    }

    handleCancel = () => {
        const { ModalActions } = this.props;
        ModalActions.hideModal('write');
    }
    render(){
        const { handleWrite, handleCancel } = this;
        const { visible, id, category } = this.props;
        return(
            <WriteModal
            onWrite={handleWrite}
            onCancel={handleCancel}
            visible={visible}
            id={id}
            category={category}
            />
        )
    }
}

export default connect(
    (state) => ({
        title : state.editor.get('title'),
        markdown : state.editor.get('markdown'),
        tags : state.editor.get('tags'),
        category : state.editor.get('category'),
        visible : state.modal.getIn(['modal', 'write'])
    }),
    (dispatch) => ({
        ModalActions : bindActionCreators(modalActions,dispatch),
        EditorActions : bindActionCreators(editorActions,dispatch)
    })
)(withRouter(WritePostModalContainer));
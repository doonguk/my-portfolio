import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom';
import *as modalActions from 'store/modules/modal';
import *as postActions from 'store/modules/post';
import DeleteModal from 'components/modal/DeleteModal';

const DeleteModalContainer = ({visible, postId, ModalActions, PostActions }) => {
    const handleDelete = async () => {
        try{
            await PostActions.deletePost(postId);
            window.location.reload();
        }catch(e){
            console.log(e);
         }
    }
    const handleGoBack = () => {
        ModalActions.hideModal('delete');
    }
    return(
        <DeleteModal
        visible={visible}
        onDelete={handleDelete}
        onGoBack={handleGoBack}
        />
    )
}

export default connect(
    (state)=>({
        visible : state.modal.getIn(['modal','delete']),
        postId : state.post.get('postId')
    })
    ,
    (dispatch) => ({
        ModalActions : bindActionCreators( modalActions, dispatch),
        PostActions : bindActionCreators( postActions, dispatch)
    })
)(DeleteModalContainer);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom';
import *as modalActions from 'store/modules/modal';

import LoginModal from 'components/modal/LoginModal';
// import ModalWrapper from 'components/modal/ModalWrapper';

class LoginModalContainer extends Component{
    handleCancel = () => {
        const { ModalActions } =this.props;
        ModalActions.hideModal('login');
        ModalActions.initializeInput();
    }
    handleChange = (e) => {
        const { value } = e.target;
        const { ModalActions } = this.props;
        ModalActions.changeInput(value);
    }
    handleLogin = async() => {
        const { password, ModalActions } = this.props;
        try{
            await ModalActions.login(password);
            ModalActions.hideModal('login');
        }catch(e){
            console.log('login',e);
        }
    }
    handleKeyPress = (e) => {
        // if(e.KeyCode == 13){
        //     this.handleLogin();
        // }
        if( e.key === 'Enter' ){
            this.handleLogin();
        }
    }
    render(){
        const { handleCancel, handleChange, handleKeyPress, handleLogin} = this;
        const { visible, password, error} = this.props;
        return(
            <LoginModal
            onCancel={handleCancel}
            visible={visible}
            onChange={handleChange}
            password={password}
            onKeyPress={handleKeyPress}
            onLogin={handleLogin}
            error={error}
            />
        )
    }
}

export default connect(
    (state) => ({
        visible : state.modal.getIn(['modal','login']),
        password : state.modal.getIn(['password','text']),
        error : state.modal.getIn(['password','error'])
    }),
    (dispatch) => ({
        ModalActions : bindActionCreators(modalActions, dispatch)
    })
)(LoginModalContainer);
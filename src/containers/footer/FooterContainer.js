import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as modalActions from 'store/modules/modal';
import Footer from 'components/common/Footer';

class FooterContainer extends Component{
    componentDidMount(){
        const { ModalActions } = this.props;
        ModalActions.loginCheck();
    }
    handleLogin = async() => {
        const { ModalActions,logged } = this.props;
        if(logged){
         try{
            await ModalActions.logout();
            window.location.reload();
         }catch(e){
             console.log('logout',e);
         }
        }else{
        ModalActions.showModal('login');
        }
    }
    render(){
        const { logged } = this.props;
        const { handleLogin } = this;
        return(
            <Footer 
            onLogin={handleLogin}
            logged={logged}
            />
        )
    }
}

export default connect(
    (state) => ({
        logged : state.modal.get('logged')
    }),
    (dispatch) => ({
        ModalActions : bindActionCreators( modalActions, dispatch)
    })
)(FooterContainer);
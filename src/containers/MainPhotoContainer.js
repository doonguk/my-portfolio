import React,{Component} from 'react';
import MainPhoto from 'components/MainPhoto';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import *as mainPhotoActions from 'store/modules/mainPhoto';

class MainPhotoContainer extends Component{
    handleShow = (index) => {
        const path = `main${index}.jpg`;
        const { MainPhotoActions } = this.props;
        MainPhotoActions.changePath(path);
    }
    changePhoto = () => {
        const { index, MainPhotoActions } = this.props;
        if(index===4){
            MainPhotoActions.initialize();
            return;
        }
        MainPhotoActions.addIndex();
        this.handleShow(this.props.index);
    }
    componentDidMount(){
        // setInterval(this.changePhoto,5000);
    }
    render(){
        const { path, index } = this.props;
        const { handleShow } = this;
        return(
           <MainPhoto
           onShow={handleShow}
           path={path}
           index={index}
           />
        )
    }
}

export default connect(
    (state) => ({
        path : state.mainPhoto.get('path'),
        index : state.mainPhoto.get('index')
    }),
    (dispatch) => ({
        MainPhotoActions : bindActionCreators(mainPhotoActions, dispatch)
    })
)(MainPhotoContainer);
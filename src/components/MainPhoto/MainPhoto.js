import React,{Component} from 'react';
import styles from './MainPhoto.module.scss';
import classNames from 'classnames/bind';

import mainPhoto1 from 'files/main1.jpg';
import mainPhoto2 from 'files/main2.jpg';
import mainPhoto3 from 'files/main3.jpg';
import mainPhoto4 from 'files/main4.jpg';
// const $ = window.jQuery;

const cx = classNames.bind(styles);
class MainPhoto extends Component {
        
    componentDidUpdate(){
        const { index } = this.props;
        if( index === 1){
           window.$("#img1").fadeIn(3000);
            return;
        }
        else if( index === 2){
           window.$("#img2").fadeIn(3000);
        }
        else if( index === 3){
           window.$("#img3").fadeIn(3000);
        }
        else{
           window.$("#img4").fadeIn(3000);
        }

     }
    render(){
        const { onShow, path } = this.props;
        return(
            <div className={cx('main-photo')}>
                <div className={cx('photo-box')}>
                    {
                        path==='main2.jpg' && <img src={mainPhoto2} alt="대문사진" width="550" height="500"/>
                    }
                    {
                        path==='main1.jpg'&& <img src={mainPhoto1} alt="대문사진" width="550" height="500"/>
                    }
                    {
                        path==='main3.jpg' && <img src={mainPhoto3} alt="대문사진"  width="500" height="500"/>
                    }
                    {
                        path==='main4.jpg' && <img src={mainPhoto4} alt="대문사진"/>
                    }
                </div>
                <div className={cx('photo-btn')}>
                    <div onClick={()=>onShow(1)}>&ordm;</div>
                    <div onClick={()=>onShow(2)}>&ordm;</div>
                    <div onClick={()=>onShow(3)}>&ordm;</div>
                    <div onClick={()=>onShow(4)}>&ordm;</div>
                </div>
            </div>
        )
    }
}

export default MainPhoto;
import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';


import facebook from 'files/footer/facebook.png';
import instagram from 'files/footer/instagram.png';
import github from 'files/footer/github.png';

const cx = classNames.bind(styles);

const Footer = ({onLogin, logged}) => {
    return(
        <div className={cx('footer')}>
            <div className={cx('footer-content')}>
                <div className={cx('all-right-reserved')}>
                    &copy; 2018 Yum.io All Rights Reserved
                </div>
                <div className={cx('login')} onClick={onLogin}>{
                    logged ? 'LOGOUT ' : 'Administrator Login'
                }</div>
                <div className={cx('logos')}>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100003363456364&ref=bookmarks">
                        <img src={facebook} alt="푸터로고" width="40" height="40"/></a>
                     </div>
                     <div>
                         <a href="https://www.instagram.com/d_uuuk/">
                        <img src={instagram} alt="푸터로고" width="40" height="40"/></a>
                    </div>
                    <div>
                         <a href="https://github.com/mbxd1">
                        <img src={github} alt="푸터로고" width="40" height="40"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;



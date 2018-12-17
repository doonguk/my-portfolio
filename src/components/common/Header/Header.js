import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;

const cx = classNames.bind(styles);

const Header = () => {

    return(
    <div className={cx('header-container')}>
        <div className={cx('header')}>
             <Link to="/" className={cx('logo')}>Yum.io</Link>
            <div className={cx('category')}>
            <nav>
                    <a href="#about">About</a>
                    <a href="#blog">Blog</a>
                    <a href="#project">Project</a>
            </nav>
             </div>  
            <div className={cx('search-btn')}>
                <nav>
                <a href="#search">Search</a>
                </nav>
            </div>
        </div>
    </div>
    )
}

export default Header;
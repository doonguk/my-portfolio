import React from 'react';
import styles from './BlogMenuBar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import profile from 'files/profile.jpg';
import facebook from 'files/footer/facebook.png';
import instagram from 'files/footer/instagram.png';

const cx = classNames.bind(styles);

const BlogMenuBar = () => {
    const style={
        paddingRight : '5px',
    }
    return(
        <div className={cx('blog-menubar')} >
            <div className={cx('profile')}>
              <div className={cx('profile-photo')}>
                <img src={profile} alt="profile" width="240" height="240"/>
              </div>
              <div className={cx('name')}>YUM ( HONG DONG UK )</div>
              <div className={cx('sns')}>
                <span>Contact Info &nbsp;&nbsp;</span>
                <div style={style}><a href="https://www.facebook.com/profile.php?id=100003363456364&ref=bookmarks"><img src={facebook} alt="facebook"/></a></div>
                <a href="https://www.instagram.com/d_uuuk/"><img src={instagram} alt="instagram"/></a>
              </div>
              <div className={cx('description')}>
                초보 개발자의 개발공부로그 입니다.<br/> 피드백은 환영입니다♥
              </div>
            </div>
            <div className={cx('menu')}>
                <Link to="/blog" className={cx('home')}>Home</Link>
            </div>
            <div className={cx('menu')}>
                <Link to="/blog/category" className={cx('home')}>Category</Link>
            </div>
            <nav>
            <div className={cx('sub-menu')}>
                <a href="/blog/category#FreeBoard" className={cx('home')}>FreeBoard</a>
            </div>
            <div className={cx('sub-menu')}>
                <a href="/blog/category#PlayGround" className={cx('home')}>PlayGround</a>
            </div>
            <div className={cx('sub-menu')}>
                <a href="/blog/category#Compouter" className={cx('home')}>Computer Science</a>
            </div>
            <div className={cx('sub-menu')}>
                <a href="/blog/category#NodeJs" className={cx('home')}>NodeJs</a>
            </div>
            <div className={cx('sub-menu')}>
              <a href="/blog/category#React" className={cx('home')}>React</a>
            </div>
            <div className={cx('sub-menu')}>
                <a href="/blog/category#JavaScript" className={cx('home')}>JavaScript</a>
            </div>
            <div className={cx('sub-menu')}>
                 <a href="/blog/category#Python" className={cx('home')}>Python</a>
            </div>
            {/* <div className={cx('sub-menu')}>
                <a href="/blog/category#Django" className={cx('home')}>Django</a>
            </div> */}
            </nav>
            <div className={cx('menu')}>
                <Link to="/about" className={cx('home')}>About</Link>
            </div>
            <div className={cx('menu')}>
                <Link to="/search" className={cx('home')}>Search</Link>
            </div>
        </div>
    )
}

export default BlogMenuBar;
import React, {Component} from 'react';
import styles from './BlogHeader.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import search from 'files/blog/search.png';
import menu from 'files/blog/menu.png'
import menuActive from 'files/blog/menuActive.png';

const cx = classNames.bind(styles);

class BlogHeader extends Component{

    render(){
        const { logged, menuVisible, onMenuBar } = this.props;
        return(
            <div className={cx('template')} id="search-top">
                <div className={cx('blog-header')}>
                    <div className={cx('header-title')}>
                        Yum의 개발공부로그
                    </div>
                    {
                        logged && <Link to="/blogEditor" className={cx('write-btn')}>Write</Link>
                    }
                    {
                        !menuVisible && <Link to="/search" className={cx('search-btn')}><img src={search} alt="search" width="25" height="25"/></Link>
                    }
                    {
                       menuVisible ?  
                        <img
                        src={menuActive} alt="menu" 
                        width="25" 
                        height="25"
                        onClick={onMenuBar}
                        /> :
                        <img className={cx('menu')} 
                        src={menu} alt="menu" 
                        width="25" 
                        height="25"
                        onClick={onMenuBar}
                         />
                    }
                </div>
        </div>
        )
    }
}

export default BlogHeader;
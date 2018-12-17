import React from 'react';
import styles from './BlogAbout.module.scss';
import classNames from 'classnames/bind';

import myDesk from 'files/blog/mydesk.jpg';
const cx = classNames.bind(styles);

const BlogAbout = () => {
    return(
        <div className={cx('about-template')}>
            <h1>ABOUT</h1>
            <div>
            멋진 개발자가 되고싶은 초보 프로그래머의 블로그 입니다.<br/>
            하나씩 천천히 기초부터 탄탄히 공부하고 있습니다.<br/>
            꿈을 이루는 그 날까지 열심히!!!!!!
            화이팅 ~.~
            </div>
            <img src={myDesk} alt="Desk"/>
        </div>
    )
}

export default BlogAbout;
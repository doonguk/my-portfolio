import React from 'react';
import styles from './About.module.scss';
import classNames from 'classnames/bind';

import profile from 'files/profile.jpg';
import computer from 'files/about/computer.svg';
import star from 'files/about/star.svg';
import play from 'files/about/play.svg';

const cx = classNames.bind(styles);

const About = () => {
    return(
<div className={cx('template-margin') }  id="about">
    <div className={cx('about')}>
        <h1 className={cx('title')}>
            About
            <div className={cx('title-bottom')}></div>
        </h1>
        <div className={cx('about-box')}>
            <div className={cx('about-profile')}>
                <img src={profile} width="250" height="250" alt="프로필사진"/>
                <div className={cx('profile')}>
                    <div className={cx('name')}>Dong Uk ( 홍동욱 )</div>
                    <div className={cx('job')}> Front-end Developer</div>
                    <div className={cx('sub-job')}> Back-end Developer</div>
                    <div className={cx('tags')}>
                        #Development #Movie #Game
                    </div>
                </div>
            </div>
            <div className={cx('about-content-box')}>
                <div className={cx('about-content')}>
                    <img src={computer} alt="컴퓨터" className={cx('icon')}/>
                    <div className={cx('letters')}>
                        <div className={cx('content-title')}>Development</div>
                        <div className={cx('description')}>React, NodeJs를 이용한 개발을 주로 하고 있습니다.</div>
                        <div className={cx('sub-description')}>React, NodeJS, Django</div>
                    </div>
                </div>
                <div className={cx('about-content')}>
                    <img src={star} alt="별" className={cx('icon')}/>
                    <div className={cx('letters')}>
                        <div className={cx('content-title')}>Attention</div>
                        <div className={cx('description')}>신기술에 관심이 많고 배우는걸 좋아합니다.</div>
                        <div className={cx('sub-description')}>AWS, Docker, GraphQL, Apolo</div>
                    </div>
                </div>
                <div className={cx('about-content')}>
                    <img src={play} alt="게임" className={cx('icon')}/>
                    <div className={cx('letters')}>
                        <div className={cx('content-title')}>hobby</div>
                        <div className={cx('description')}>영화 감상, 맛집 탐방이 저의 취미 입니다. </div>
                        <div className={cx('sub-description')}>Movie, Hole in the wall </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default About;
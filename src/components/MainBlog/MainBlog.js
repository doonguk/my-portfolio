import React from 'react';
import styles from './MainBlog.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const MainBlog = ({history, onPush}) => {

    const handlePush = () => {
        history.push('/blog')
    }

    return(
        <div className={cx('template-margin')} id="blog">
        <div className={cx('main-blog-template')}>
            <div className={cx('mb-header')}>
                <h1 onClick={handlePush}>Blog</h1>
                <div className={cx('mb-header-line')}></div>
            </div>
            <div className={cx('mb-content')}>
                <div className={cx('content','react')} onClick={()=>onPush('React')}>
                    <div className={cx('content-react')}>
                        <div className={cx('title')}>React</div>
                        <div className={cx('description')}>#우당탕탕 YUM의 리액트 개발로그</div>
                    </div>
                    <div className={cx('btn')}>보러가기</div>
                </div>
                <div className={cx('content','javascript')} onClick={()=>onPush('JavaScript')}>
                    <div className={cx('content-javascript')}>
                        <div className={cx('title')}>JavaScript</div>
                        <div className={cx('description')}>#맨땅에 헤딩 자바스크립트 공부</div>
                    </div>
                    <div className={cx('btn')}>보러가기</div>
                </div>
                <div className={cx('content','nodejs')} onClick={()=>onPush('NodeJs')}>
                  <div className={cx('content-nodejs')}>
                        <div className={cx('title')}>NodeJS</div>
                        <div className={cx('description')}>#자크립트 여서 시작한 노드 파헤치기</div>
                    </div>
                    <div className={cx('btn')}>보러가기</div>
                </div>
                <div className={cx('content','python')} onClick={()=>onPush('Python')}>
                    <div className={cx('content-python')}>
                        <div className={cx('title')}>Python</div>
                        <div className={cx('description')}>#연구실에서 살아남는 과정로그</div>
                    </div>
                    <div className={cx('btn')}>보러가기</div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default withRouter(MainBlog);
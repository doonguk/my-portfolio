import React from 'react';
import Header from 'components/common/Header';
import FooterContainer from 'containers/footer/FooterContainer';
import styles from './PageTemplate.module.scss';
import classNames from 'classnames/bind';

import MainPhotoContainer from 'containers/MainPhotoContainer';
import LastUpdateContainer from 'containers/main/LastUpdateContainer';
import About from 'components/About';
import MainBlogContainer from 'containers/main/MainBlogContainer';
import Project from 'components/Project';
import SearchContainer from 'containers/main/SearchContainer';
import LoginModalContainer from 'containers/modal/LoginModalContainer';

const cx = classNames.bind(styles);

const PageTemplate = () => {
    return(
        <div className={cx('pageTemplate')}>
            <Header/>
            <div className={cx('template-main')}>
                <MainPhotoContainer/>
                <LastUpdateContainer/>
                <About/>
                <MainBlogContainer/>
                <Project/>
                <SearchContainer/>
            </div>
            <FooterContainer/>
            <LoginModalContainer/>
        </div>
    )
}

export default PageTemplate;
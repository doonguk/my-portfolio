import React from 'react';
import styles from './Project.module.scss';
import classNames from 'classnames/bind';

import project from 'files/project/project.jpg';
import quote1 from 'files/project/quote1.png';
import quote2 from 'files/project/quote2.png';

const cx = classNames.bind(styles);

const Project = () => {
    const style ={
        backgroundImage :`url(${project})`
    }
    return(
        <div style={style} className={cx('project-template')} id="project">
            <div className={cx('project')}>
                 <img src={quote1} alt="quote"/>
                 <div className={cx('temporary-comment')}>
                  멋진 프로젝트<br/>를 준비중 입니다! <br/> 잠시만 기다려 주세요
                </div>
                <div><img src={quote2} alt="quote2"/></div>
            </div>
        </div>
    )
}

export default Project;
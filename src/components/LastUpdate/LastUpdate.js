import React, {Component} from 'react';
import styles from './LastUpdate.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import freeboard from 'files/main/freeboard.PNG';
import react from 'files/main/React.png';
import javascript from 'files/main/javascript.PNG';
import nodejs from 'files/main/nodejs.PNG';
import python from 'files/main/python.PNG';
import computer from 'files/main/computer.png';
import playground from 'files/main/playground.jpg';
const cx = classNames.bind(styles);

class LastUpdate extends Component{
    render(){
        const { photo } = this.props;
        const { title, body, tags, id } = this.props;
        const tagList = tags.map(
            (tag) => (<Link key={tag} to={`/tag/${tag}`} className={cx('tag')}>#{tag}</Link>)
        )
        return(
            <div className={cx('last-update')}>
                <h1 className={cx('title')}>
                    Last Update
                    <div className={cx('title-bottom')}></div>
                </h1>
                <div className={cx('lu-box')}>
                    <div className={cx('lu-photo')}>
                        {
                            photo === 'react' &&  <Link to={`/post/${id}`}><img src={react} alt="main"  height="330" /></Link>
                        }
                        {
                            photo === 'freeboard' &&  <Link to={`/post/${id}`}><img src={freeboard} alt="main" height="330"/></Link>
                        }
                        {
                            photo === 'javascript' &&  <Link to={`/post/${id}`}><img src={javascript} alt="main" height="330"/></Link>
                        }
                        {
                            photo === 'nodejs' &&  <Link to={`/post/${id}`}><img src={nodejs} alt="main" height="330"/></Link>
                        }
                        {
                            photo === 'python' &&  <Link to={`/post/${id}`}><img src={python} alt="main" height="330"/></Link>
                        }
                        {
                            photo === 'computer science' &&  <Link to={`/post/${id}`}><img src={computer} alt="main" height="330"/></Link>
                        }
                        {
                            photo === 'playground' &&  <Link to={`/post/${id}`}><img src={playground} alt="main" height="330"/></Link>
                        }
                    </div>
                    <div className={cx('lu-content-box')}>
                        <div className={cx('lu-tags')}>{ tags && tagList}</div>
                        <div className={cx('lu-title')}>{title}</div>
                        <div className={cx('lu-content')}>{body}</div>
                        <div className={cx('lu-btn-box')}>
                            <div className={cx('lu-btn')}>
                            <Link to={`/post/${id}`} className={cx('btn')}>Let's See</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default LastUpdate;
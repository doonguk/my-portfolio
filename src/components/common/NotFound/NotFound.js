import React from 'react';
import styles from './NotFound.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const NotFound = () => {
    return(
        <div className={cx('page-template')}>
            <div className={cx('description')}>
            <h1>
                404
            </h1>
            <h3>Page not found</h3>
            <Link to="/blog" className={cx('btn')}>Go back</Link>
            </div>
        </div>
    )
}

export default NotFound;
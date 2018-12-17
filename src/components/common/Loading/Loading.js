import React from 'react';
import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Loading = () => {
    return(
        <div className={cx("wrap")}>
            <div className={cx('cir1')}></div>
            <div className={cx('cir2')}></div>
            <div className={cx('text')}>loading..</div>
        </div>
    )
}

export default Loading;
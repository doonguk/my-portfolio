import React from 'react';
import styles from './LoginModal.module.scss';
import classNames from 'classnames/bind';

import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({onCancel, onLogin, visible, onChange, onKeyPress, password, error}) => {
    return(
        <ModalWrapper 
        visible={visible}>
            <div className={cx('login-modal')}>
                <div className={cx('cancel-btn')} onClick={onCancel}>&times;</div>
                <div className={cx('title')}>Login</div>
                <div className={cx('description')}>Please enter password</div>
                <input autoFocus
                       type="password"
                       onChange={onChange}
                       onKeyPress={onKeyPress}
                       name="password"
                       value={password}
                       />
                { error && <div className={cx('warning-msg')}>Password is incorrect</div> }
                <div className={cx('btn')} onClick={onLogin}>login</div>
            </div>
        </ModalWrapper>
    )
}

export default LoginModal;
import React from 'react';
import styles from './DeleteModal.module.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const DeleteModal = ({visible, onDelete, onGoBack }) => {
    return(
        <ModalWrapper visible={visible}>
        <div className={cx('delete-modal')}>
            <div className={cx('top')}>
                <div className={cx('cancel-btn')}>&times;</div>
                <div className={cx('title')}>post delete</div>
            </div>
            <div className={cx('description')}>Are you sure?</div>
            <div className={cx('btns')}>
                <div onClick={onDelete}>Okay</div>
                <div onClick={onGoBack}>Cancel</div>
            </div>
        </div>
        </ModalWrapper>
    )
}

export default DeleteModal;
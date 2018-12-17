import React from 'react';
import styles from './WriteModal.module.scss';
import classNaems from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
const cx = classNaems.bind(styles);

const WriteModal = ({onWrite, onCancel, visible, id, category}) => {
    return(
        <ModalWrapper visible={visible}>
            <div className={cx('write-modal')}>
               <div className={cx('title')}>{
                   id ? 'Revise Post': 'Write Post'
               }</div>
               <div className={cx('category')}>
                    <div>Choose Category</div>
                        {
                        category ? <select id="post-category"><option>{category}</option></select> :
                        <select id="post-category">
                        <option>FreeBoard</option>
                        <option>PlayGround</option>
                        <option>Computer Science</option>
                        <option>NodeJs</option>
                        <option>React</option>
                        <option>JavaScript</option>
                        <option>Python</option>
                        </select>
                    }
               </div>
               <div className={cx('btns')}>
                   <div className={cx('write-btn')} onClick={
                       () => {
                            const sel = document.getElementById('post-category');
                            let category = sel.options[sel.selectedIndex].value;
                            onWrite(category);
                       }
                       }>Write</div>
                   <div className={cx('cancel-btn')} onClick={onCancel}>Cancel</div>
               </div>
            </div>
        </ModalWrapper>
    )
}

export default WriteModal;
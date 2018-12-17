import React from 'react';
import styles from './EditorHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EditorHeader = ( {onGoBack, onSubmit, id}) => {
    return(
        <div className={cx('editor-header')}>
          <div className={cx('back')}>
            <div onClick={onGoBack}>GoBack</div>
          </div>
          <div className={cx('submit')}>
            <div onClick={onSubmit}>{
              id ? 'Revise' : 'Submit'
            }</div>
          </div>
        </div>
    )
}

export default EditorHeader;
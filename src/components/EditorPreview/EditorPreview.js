import React from 'react';
import styles from './EditorPreview.module.scss';
import classNames from 'classnames/bind';

import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const EditorPreview = ({markdown, title}) => {
    return(
        <div className={cx('editor-preview')}>
            <h1 className={cx('title')}>
                {title}
            </h1>
            <div>
                <MarkdownRender markdown={markdown}/>
            </div>
        </div>
    )
}

export default EditorPreview;
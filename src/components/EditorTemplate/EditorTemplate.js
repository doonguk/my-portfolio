import React, { Component } from 'react';
import styles from './EditorTemplate.module.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);

class EditorTemplate extends Component {
    state = {
        leftPercentage : 0.5
    }
    //separator click 후 mouse 움직일때 leftPercentage 값 update
    handleMouseMove = (e) => {
        this.setState({
            leftPercentage : e.clientX / window.innerWidth
        })
    }
    //mouseup 할 경우 이벤트 제거
    handleMouseUp = () => {
        document.body.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    //separator click
    handleSeparatorMouseDown = () => {
        document.body.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }
    render(){
        const { header, editor, preview} = this.props;
        const { leftPercentage } = this.state;
        const { handleSeparatorMouseDown } = this;

        const leftStyle = {
            flex : leftPercentage
        }
        const rightStyle = {
            flex : 1 - leftPercentage
        }

        const separatorStyle = {
            left : `${leftPercentage * 100}%`
        }
        return(
            <div className={cx('editor-template')}>
                {header}
                <div className={cx('panes')}>
                    <div className={cx('pane', 'editor')} style={leftStyle}>
                        {editor}
                    </div>
                    <div className={cx('pane', 'preview')} style={rightStyle}>
                        {preview}
                    </div>
                    <div
                        className={cx('separator')}
                        style={separatorStyle}
                        onMouseDown={handleSeparatorMouseDown}
                    />
                </div>
            </div>
        )
    }
}

export default EditorTemplate;
import React, { Component } from 'react';
import styles from './EditorPane.module.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';


const cx = classNames.bind(styles);

class EditorPane extends Component {
    
    editor = null;
    codeMirror = null;
    cursor = null;

    initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editor, {
            mode : 'markdown',
            theme : 'monokai',
            lineNumbers : true,
            lineWrapping : true
        });
        this.codeMirror.on('change', this.handleChangeMarkdown);
    }
    handleChangeMarkdown = (doc) => {
        const { onChangeInput } = this.props;
        this.cursor = doc.getCursor();
        onChangeInput({
            name : 'markdown',
            value : doc.getValue()
        });
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        const { onChangeInput } = this.props;
        onChangeInput({name,value})
    }
    componentDidMount(){
        this.initializeEditor();
    }
    componentDidUpdate(prevProps, prevState){
        if( prevProps.markdown !== this.props.markdown ){
            const { codeMirror, cursor } = this;
            if(!codeMirror) return;
            codeMirror.setValue(this.props.markdown);
            if(!cursor) return;
            codeMirror.setCursor(cursor);
        }
    }
    render(){
        const { handleChange } = this;
        const { title, tags } =this.props;
        return(
            <div className={cx('editor-pane')}>
                <input className={cx('title')} placeholder="Write your title" name="title" value={title} onChange={handleChange}/>
                <div className={cx('code-editor')} ref={ref => this.editor=ref}></div>
                <div className={cx('tags')}>
                    <div className={cx('description')}>태그</div>
                    <input name="tags" placeholder="Write your tags" value={tags} onChange={handleChange}/>
                </div>
            </div>
        )
    }
}

export default EditorPane;
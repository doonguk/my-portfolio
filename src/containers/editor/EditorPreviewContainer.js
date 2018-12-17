import React, {Component} from 'react';
import EditorPreview from 'components/EditorPreview';
import { connect } from 'react-redux';


class EditorPreviewContainer extends Component{

    render(){
        const { title, markdown } = this.props;

        return(
                <EditorPreview
                title={title}
                markdown={markdown}
                />
        )
    }
}

export default connect(
    (state) => ({
        title : state.editor.get('title'),
        markdown : state.editor.get('markdown'),
    })
)(EditorPreviewContainer);
import React from 'react';

import EditorTemplate from 'components/EditorTemplate';
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import EditorPreviewContainer from 'containers/editor/EditorPreviewContainer';

import WritePostModalContainer from 'containers/modal/WritePostModalContainer';

const EditorPage = ({match}) => {
    const { id } = match.params;
    return(
        <div>
          <EditorTemplate
            header={<EditorHeaderContainer id={id}/>}
            editor={<EditorPaneContainer/>}
            preview={<EditorPreviewContainer/>}
          />
          <WritePostModalContainer id={id}/>
        </div>
    )
}

export default EditorPage;
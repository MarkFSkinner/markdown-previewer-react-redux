import React from 'react';

const Editor = props => (
  <div id='editor_wrap' className={`${props.editorViewClass} ${props.editorHidden}`}>
    <div className='toolbar'>
      <div className='title'>Editor</div>
      <div className='icon'>
        <i onClick={props.toggleEditorFullscreen} className={props.icon}></i>
      </div>
    </div>
    <textarea id='editor' type='text' onChange={props.updateEditor} value={props.markdownText}></textarea>
  </div>
);


export default Editor;
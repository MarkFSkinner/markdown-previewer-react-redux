import React from 'react';

const Editor = props => (
  <div id='editor_wrap'>
    <div className='toolbar'>Editor</div>
    <textarea id='editor' type='text' onChange={props.updateEditor} value={props.markdownText}></textarea>
  </div>
);


export default Editor;
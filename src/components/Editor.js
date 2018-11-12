import React from 'react';

const Editor = props => (
  <div id='editorwrap'>
    <textarea id='editor' type='text' onChange={props.updateEditor} value={props.markdownText}></textarea>
  </div>
);


export default Editor;
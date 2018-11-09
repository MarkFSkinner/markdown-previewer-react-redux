import React from 'react';

const Editor = props => (
  <div>
    <textarea type='text' onChange={props.updateEditor} value={props.markdownText}></textarea>
  </div>
);


export default Editor;
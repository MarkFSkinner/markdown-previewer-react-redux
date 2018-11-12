import React from 'react';

const Editor = props => (
  <div id='editor_wrap'>
    <div className='toolbar'>
      <div className='title'>Editor</div>
      <div className='icon'>
        <i className="icon-fullscreen"></i>
      </div>
    </div>
    <textarea id='editor' type='text' onChange={props.updateEditor} value={props.markdownText}></textarea>
  </div>
);


export default Editor;
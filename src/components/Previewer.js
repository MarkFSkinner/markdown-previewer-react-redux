import React from 'react';

const Previewer = props => (
  <div id='preview_wrap'>
    <div className='toolbar'>
      <div className='title'>Preview</div>
      <div className='icon'>
        <i className="icon-fullscreen"></i>
      </div>
    </div>
    <div id='preview' dangerouslySetInnerHTML={{__html: props.previewResult}}></div>
  </div>
);


export default Previewer;
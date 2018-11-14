import React from 'react';

const Previewer = props => (
  <div id='preview_wrap' className={`${props.previewViewClass} ${props.previewHidden}`}>
    <div className='toolbar'>
      <div className='title'>Preview</div>
      <div className='icon'>
        <i onClick={props.togglePreviewFullscreen} className={props.icon}></i>
      </div>
    </div>
    <div id='preview' dangerouslySetInnerHTML={{__html: props.previewResult}}></div>
  </div>
);


export default Previewer;
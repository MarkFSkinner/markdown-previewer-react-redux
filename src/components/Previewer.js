import React from 'react';

const Previewer = props => (
  <div id='preview_wrap'>
    <div className='toolbar'>Preview</div>
    <div id='preview' dangerouslySetInnerHTML={{__html: props.previewResult}}></div>
  </div>
);


export default Previewer;
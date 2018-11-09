import React from 'react';

const Previewer = props => (
  <div id='content' dangerouslySetInnerHTML={{__html: props.previewResult}}></div>
);


export default Previewer;
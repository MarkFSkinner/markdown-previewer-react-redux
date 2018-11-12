import React from 'react';

const Previewer = props => (
  <div id='preview' dangerouslySetInnerHTML={{__html: props.previewResult}}></div>
);


export default Previewer;
import React, { Component } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';

import { connect } from 'react-redux';

import marked from 'marked';

import {
  updateMarkdownText,
  setPreview,
  updateEditorViewClass,
  updatePreviewViewClass,
  updateEditorHidden,
  updatePreviewHidden,
  updateIcon
} from './actions';

marked.setOptions({
  breaks: true,
});

class App extends Component {

  componentDidMount = () => {
    this.props.setPreview();
  }

  updateEditor = (e) => {
    this.props.updateMarkdownText(e.target.value);
    //this.updatePreviewer();
  }

  updatePreviewer = () => {
    document.getElementById('content').innerHTML =
      this.props.myData.previewResult;
  }

  toggleEditorFullscreen = () => {
    const result = (this.props.myData.editorViewClass === 'normal') ? 'fullscreen' : 'normal';
    this.props.updateEditorViewClass(result);
    const hide = (this.props.myData.previewHidden === '') ? 'hidden' : '';
    this.props.updatePreviewHidden(hide);
    const icon = (this.props.myData.icon === 'icon-fullscreen') ? 'icon-resize-small' : 'icon-fullscreen';
    this.props.updateIcon(icon);
  }

  togglePreviewFullscreen = () => {
    const result = (this.props.myData.previewViewClass === 'normal') ? 'fullscreen' : 'normal';
    this.props.updatePreviewViewClass(result);
    const hide = (this.props.myData.editorHidden === '') ? 'hidden' : '';
    this.props.updateEditorHidden(hide);
    const icon = (this.props.myData.icon === 'icon-fullscreen') ? 'icon-resize-small' : 'icon-fullscreen';
    this.props.updateIcon(icon);
  }

  /*toggleEditorHidden = () => {
    const result = (this.props.myData.editorHidden === '') ? 'hidden' : '';
    this.props.updateEditorHidden(result);
  }

  togglePreviewHidden = () => {
    const result = (this.props.myData.previewHidden === '') ? 'hidden' : '';
    this.props.updatePreviewHidden(result);
  }*/

  /*replace = (text) => {
    text.replace(/\r/gi, "<br>");
  }*/

  render() {
    return (
      <div className='container'>
        <Editor
          updateEditor={this.updateEditor}
          markdownText={this.props.myData.markdownText}
          editorViewClass={this.props.myData.editorViewClass}
          toggleEditorFullscreen = {this.toggleEditorFullscreen}
          togglePreviewHidden={this.togglePreviewHidden}
          editorHidden={this.props.myData.editorHidden}
          icon={this.props.myData.icon}
        />
        <Previewer
          previewResult={this.props.myData.previewResult}
          previewViewClass={this.props.myData.previewViewClass}
          togglePreviewFullscreen={this.togglePreviewFullscreen}
          toggleEditorHidden = {this.toggleEditorHidden}
          previewHidden={this.props.myData.previewHidden}
          icon={this.props.myData.icon}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myData: state.myData
  }
}

export default connect(mapStateToProps, {
  updateMarkdownText,
  setPreview,
  updateEditorViewClass,
  updatePreviewViewClass,
  updateEditorHidden,
  updatePreviewHidden,
  updateIcon
})(App);
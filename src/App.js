import React, { Component } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';

import { connect } from 'react-redux';

import marked from 'marked';

import {
  updateMarkdownText,
  setPreview
} from './actions';

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

  render() {
    return (
      <div className='container'>
        <Editor
          updateEditor={this.updateEditor}
          markdownText={this.props.myData.markdownText}
        />
        <Previewer previewResult={this.props.myData.previewResult}/>
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
  setPreview
})(App);
import marked from 'marked';

import {
  UPDATE_MARKDOWN_TEXT,
  SET_PREVIEW
} from '../actions/types';

const initialState = {
  markdownText: "# Welcome to my React Markdown Previewer! \n" +
    "## This is a sub-heading..."
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN_TEXT:
      return {
        ...state,
        markdownText: action.payload,
        previewResult: marked(action.payload)
      }
    case SET_PREVIEW:
      return {
        ...state,
        previewResult: marked(state.markdownText)
      }
    default:
      return state;
  }
}
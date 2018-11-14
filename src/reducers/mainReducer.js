import marked from 'marked';

import {
  UPDATE_MARKDOWN_TEXT,
  SET_PREVIEW,
  UPDATE_EDITOR_VIEWCLASS,
  UPDATE_PREVIEW_VIEWCLASS,
  UPDATE_EDITOR_HIDDEN,
  UPDATE_PREVIEW_HIDDEN,
  UPDATE_ICON
} from '../actions/types';

const initialState = {
  markdownText: "# This is a Header! \n" +
    "## This is a sub-heading... \n" +
    "Here is a [link](https://www.freecodecamp.com)  \n" +
    "Here is a <a href='https://www.freecodecamp.com' target='_blank'>second link</a> that opens in a new tab!  \n" +
    "Here is some code, `<div><p>Hello There!</p></div>`. \n" +
    "```\n" +
    "// Here is some multi-line code:\n" +
    "function sum(a, b) { \n" +
    "  return a + b; \n" +
    "} \n" +
    "``` \n" +
    "- Here is a list \n" +
    "  - Here is a list item \n" +
    "   - Here is another \n" +
    "   - and another \n\n" +
    "> This is a Block Quote! \n\n" +
    "![React Logo w/ Text](https://goo.gl/Umyytc) \n\n" +
    "Here is **BOLDED** text! \n",
    editorViewClass: 'normal',
    previewViewClass: 'normal',
    editorHidden: '',
    previewHidden: '',
    icon: 'icon-fullscreen'
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
    case UPDATE_EDITOR_VIEWCLASS:
      return {
        ...state,
        editorViewClass: action.payload
      }
    case UPDATE_PREVIEW_VIEWCLASS:
      return {
        ...state,
        previewViewClass: action.payload
      }
    case UPDATE_EDITOR_HIDDEN:
      return {
        ...state,
        editorHidden: action.payload
      }
    case UPDATE_PREVIEW_HIDDEN:
      return {
        ...state,
        previewHidden: action.payload
      }
    case UPDATE_ICON:
      return {
        ...state,
        icon: action.payload
      }
    default:
      return state;
  }
}
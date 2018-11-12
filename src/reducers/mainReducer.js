import marked from 'marked';

import {
  UPDATE_MARKDOWN_TEXT,
  SET_PREVIEW
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
    "Here is **BOLDED** text! \n"
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
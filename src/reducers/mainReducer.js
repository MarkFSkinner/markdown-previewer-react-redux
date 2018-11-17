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
  markdownText:
`# This is a Header!
## This is a sub-heading...
Here is a [link](https://www.freecodecamp.com)
Here is a <a href='https://www.freecodecamp.com' target='_blank'>second link</a> that opens in a new tab!
Here is some code, \`<div><p>Hello There!</p></div>\`.
\`\`\`
// Here is some multi-line code:
function sum(a, b) {
  return a + b;
}
\`\`\`
- Here is a list
  - Here is a list item
    - Here is another
    - and another

> This is a Block Quote!

![React Logo w/ Text](https://goo.gl/Umyytc)
Here is **BOLDED** text!`,
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
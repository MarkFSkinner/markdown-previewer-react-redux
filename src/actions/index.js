import {
  UPDATE_MARKDOWN_TEXT,
  SET_PREVIEW
} from './types';

export const updateMarkdownText = (text) => {
  return {
    type: UPDATE_MARKDOWN_TEXT,
    payload: text
  }
}

export const setPreview = () => {
  return {
    type: SET_PREVIEW
  }
}
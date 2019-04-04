import {
  UPDATE_MARKDOWN_TEXT,
  SET_PREVIEW,
  UPDATE_EDITOR_VIEWCLASS,
  UPDATE_PREVIEW_VIEWCLASS,
  UPDATE_EDITOR_HIDDEN,
  UPDATE_PREVIEW_HIDDEN,
  UPDATE_ICON
} from './types';

export const updateMarkdownText = (text) => {
  return {
    type: UPDATE_MARKDOWN_TEXT,
    payload: text
  }
};

export const setPreview = () => {
  return {
    type: SET_PREVIEW
  }
};

export const updateEditorViewClass = (data) => {
  return {
    type: UPDATE_EDITOR_VIEWCLASS,
    payload: data
  }
};

export const updatePreviewViewClass = (data) => {
  return {
    type: UPDATE_PREVIEW_VIEWCLASS,
    payload: data
  }
};

export const updateEditorHidden = (data) => {
  return {
    type: UPDATE_EDITOR_HIDDEN,
    payload: data
  }
};

export const updatePreviewHidden = (data) => {
  return {
    type: UPDATE_PREVIEW_HIDDEN,
    payload: data
  }
};

export const updateIcon = (data) => {
  return {
    type: UPDATE_ICON,
    payload: data
  }
};
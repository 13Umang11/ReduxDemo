import {
  ADD_PROFILEINFO,
  ADD_ADDRESSINFO,
  ADD_QUALIFICATIONINFO,
  ADD_REGISTATIONINFO,
  EDIT_PROFILEINFO,
  EDIT_ADDRESSINFO,
  EDIT_QUALIFICATIONINFO,
  EDIT_REGISTATIONINFO,
} from './action';

export const ADD_PROFILE = () => ({
  type: ADD_PROFILEINFO,
});

export const EDIT_PROFILE = () => ({
  type: EDIT_PROFILEINFO,
});

export const ADD_ADDRESS = () => ({
  type: ADD_ADDRESSINFO,
});

export const EDIT_ADDRESS = () => ({
  type: EDIT_ADDRESSINFO,
});

export const ADD_QUALIFICATION = () => ({
  type: ADD_QUALIFICATIONINFO,
});

export const EDIT_QUALIFICATION = () => ({
  type: EDIT_QUALIFICATIONINFO,
});

export const ADD_REGISTATION = () => ({
  type: ADD_REGISTATIONINFO,
});

export const EDIT_REGISTATION = () => ({
  type: EDIT_REGISTATIONINFO,
});

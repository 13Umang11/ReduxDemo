import {
  ADD_PROFILEINFO,
  ADD_ADDRESSINFO,
  ADD_QUALIFICATIONINFO,
  ADD_REGISTATIONINFO,
  EDIT_PROFILEINFO,
  EDIT_ADDRESSINFO,
  EDIT_QUALIFICATIONINFO,
  EDIT_REGISTATIONINFO,
} from './action/action';

const initialstate = {};

export const MainReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_PROFILEINFO:
      return {
        ...state,
        profile_Info: action.payload,
      };
      break;
    case ADD_ADDRESSINFO:
      return {
        ...state,
        address_Info: action.payload,
      };
      break;
    case ADD_QUALIFICATIONINFO:
      return {
        ...state,
        qualification_Info: action.payload,
      };
      break;
    case ADD_REGISTATIONINFO:
      return {
        ...state,
        registation_Info: action.payload,
      };
      break;
    case EDIT_PROFILEINFO:
      return {
        ...state,
        profile_Info: action.payload,
      };
      break;
    case ADD_ADDRESSINFO:
      return {
        ...state,
        address_Info: action.payload,
      };
      break;
    case EDIT_QUALIFICATIONINFO:
      return {
        ...state,
        qualification_Info: action.payload,
      };
      break;
    case EDIT_REGISTATIONINFO:
      return {
        ...state,
        registation_Info: action.payload,
      };
      break;
    default:
      return state;
  }
};

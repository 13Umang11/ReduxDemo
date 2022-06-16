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
// profile_screen: {
//   firstName: 'Umang',
//   lastName: '',
//   dateofbirth: '',
//   gender: '',
//   mobileNo: '',
// },
// address_screen: {
//   house: 0,
//   landmark: '',
//   area: '',
//   city: '',
//   pincode: 0,
//   // opencity: '',
// },
// qualification_screen: {
//   school10th: '',
//   school12th: '',
//   collage: '',
//   percentage: '',
//   check10: false,
//   check12: false,
//   checkC: false,
// },
// redistration_screen: {
//   nickname: '',
//   email: '',
//   password: '',
//   confirmpassword: '',
// },
// };

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

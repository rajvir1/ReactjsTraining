/*
 * @file: product.js
 * @description: Reducers and actions for store/manipulate products's  data
 * @author: Jasdeep Singh
*/

import * as TYPE from '../../actions/constants';


/******** Reducers ********/
const initialState = [];
export default function reducer(state = initialState, action) {
  console.log(action, "action")
  switch (action.type) {
    case TYPE.GET_PRODUCT_LIST:
      return action.data;
    case TYPE.TOGGLE_FUNCITON:
      return { ...state, toggleValue: action.data };
    default:
      return state;
  }
}


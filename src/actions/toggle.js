
import * as TYPE from './constants';

export const toggleFucntion = (value) => (
  {
    type: TYPE.TOGGLE_FUNCITON,
    data:value
  }
);

import * as TYPE from './constants';

export const swichFunction = (value) => {
    return (
       {
        type: TYPE.swichFunction,
        data: value
       }
    )
}
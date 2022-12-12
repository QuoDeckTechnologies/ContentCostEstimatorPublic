// export const incNumber = () => { type: "INCREMENT" }
// export const decNumber = () => { type: "DECREMENT" }
// import { createAction } from "@reduxjs/toolkit";
export const INC_NUM = 'INC_NUM';
export const incNumber = (payload) => {
    return {
        type: INC_NUM,
        payload: payload
    }

}
// export const incNumber = createAction('incNumber')

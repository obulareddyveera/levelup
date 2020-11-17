import { createSlice } from "@reduxjs/toolkit";
import Questions from "./_questions";

export const reduxSlice = createSlice({
    name: "oauth",
    initialState: {
        questions: []
    },
    reducers: {
        getInterviewQuestions: (state, action) => {
            return {
                date: new Date().getTime(),
                questions: [...action.payload]
            };
        },
    }
});

export const { getInterviewQuestions } = reduxSlice.actions;

export const asyncInterviewQuestions = () => async dispatch => {
    setTimeout(() => {

        dispatch(getInterviewQuestions(_.map(Questions, _.clone)));
    }, 1000)
};

export const dataset = state => state.interview;

export default reduxSlice.reducer;

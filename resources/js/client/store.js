import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'

import InterviewReduxSlice from "./features/interview/reduxSlice";

export default configureStore({
    reducer: {
        interview: InterviewReduxSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
     }).concat(logger),
});

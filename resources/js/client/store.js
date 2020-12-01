import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import InterviewReduxSlice from "./features/interview/reduxSlice";
import sideNavReducer from "./components/navbar/sideNavSlice";
import authorReducer from "./features/author/authorSlice";
import postsReducer from "./features/admin/posts/postsSlice";
import metadataReducer from "./metadataSlice";

export default configureStore({
    reducer: {
        interview: InterviewReduxSlice,
        sideNav: sideNavReducer,
        author: authorReducer,
        metadata: metadataReducer,
        posts: postsReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(logger)
});

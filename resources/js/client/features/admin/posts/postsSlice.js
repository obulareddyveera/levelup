import { createSlice } from "@reduxjs/toolkit";
import _ from "underscore";

export const url = "public/api/blog/post";
export const postsSlice = createSlice({
    name: "posts",
    initialState: {},
    reducers: {
        createPost: (state, action) => {
            return {...state, status: 200, ...action.payload};
        },
        listPosts: (state, action) => {
            return action.payload;
        }
    }
});

export const { createPost, listPosts  } = postsSlice.actions;

export const asyncListPosts = () => async dispatch => {
    try {
        fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                dispatch(listPosts({posts: data}));
            });
    } catch (err) {
        console.log(err);
    }
};

export const asyncUpdatePost = (params) => async dispatch => {
    try {
        fetch(`${url}/${params.id}`, {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createPost(data));
            });
    } catch (err) {
        console.log(err);
    }
};

export const asyncCreatePost = (params) => async dispatch => {
    try {
        fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createPost(data));
            });
    } catch (err) {
        console.log(err);
    }
};

export const selector = state => {
    return state.posts;
};

export default postsSlice.reducer;

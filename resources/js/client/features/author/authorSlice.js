import { createSlice } from "@reduxjs/toolkit";
import _ from "underscore";

export const url = "public/api/admin/author";
export const authorSlice = createSlice({
    name: "sidenav",
    initialState: {},
    reducers: {
        createAuthor: (state, action) => {
            const {author} = action.payload;
            return author;
        },
        listAuthor: (state, action) => {
            return action.payload;
        },
        listAuthorById: (state, action) => {
            return action.payload;
        }
    }
});

export const { createAuthor, listAuthor, listAuthorById } = authorSlice.actions;

export const asycCreateAuthor = params => async dispatch => {
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
                dispatch(createAuthor(data));
            });
    } catch (err) {
        console.log(err);
    }
};

export const asyncListAuthor = () => async dispatch => {
    try {
        dispatch(listAuthor(response));
    } catch (err) {
        console.log(err);
    }
};

export const asyncListAuthorById = () => async dispatch => {
    try {
        dispatch(listAuthorById(response));
    } catch (err) {
        console.log(err);
    }
};

export const selector = state => {
    return state.author;
};

export default authorSlice.reducer;

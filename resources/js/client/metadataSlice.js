import { createSlice } from "@reduxjs/toolkit";
import _ from "underscore";

export const url = "api/metadata/category";
export const metadataSlice = createSlice({
    name: "posts",
    initialState: {},
    reducers: {
        listCategories: (state, action) => {
            return action.payload;
        }
    }
});

export const { listCategories } = metadataSlice.actions;

export const asyncListCategories = () => async dispatch => {
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
                dispatch(listCategories({categories: data}));
            });
    } catch (err) {
        console.log(err);
    }
};

export const selector = state => {
    return state.metadata;
};

export default metadataSlice.reducer;

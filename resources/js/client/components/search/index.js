import React from "react";
import styled from "styled-components";

const SearchField = styled.h2`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const BlogSearch = () => {
    return (
        <SearchField>
            <form className="form-inline">
                <div className="input-group">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-success btn-sm" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </SearchField>
    );
};

export default BlogSearch;

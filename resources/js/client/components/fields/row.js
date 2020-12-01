import React from "react";

const Row = ({ className, children }) => {
    return (
        <div className="row">
            <div className={className}>{children}</div>
        </div>
    );
};

export default Row;

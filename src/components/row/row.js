import React from "react";

const Row = ({left, right}) => {
    return (
        <div className='row mb-2'>
            <div className="col-lg-6 col-sm-12">
                {left}
            </div>
            <div className="col-lg-6 col-sm-12">
                {right}
            </div>
        </div>
    );
};
export default Row;
import React from "react";

const DescriptionHelper = (props) => {
    const {item = '', label = '', filter = ''} = props;
    return (
        <li className='list-group-item'>
            {label}: {item[filter]}
        </li>
    )
};
export default DescriptionHelper;
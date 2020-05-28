import React from "react";

import './item-description.scss'
import ErrorButton from "../error-button";

const ItemDescription = (props) => {
    const { name } = props.item;
    return (
        <div className='card people-description'>
            <div className='card-img-left people-description__img'>
                <img src={props.imageUrl}
                     alt="R2-D2"/>
            </div>
            <div className="card-body">
                <h4 className='people-description__header'>{name}</h4>
                <ul className='people-description__list list-group list-group-flush'>
                    {
                        React.Children.map(props.children, (child => {
                            console.log(props.children);
                            return  React.cloneElement(child, { item: props.item })
                        }))
                    }
                </ul>
            </div>
        </div>
    );
};


export default ItemDescription;

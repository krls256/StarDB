import React from "react";
import './item-list.scss'


const ItemList = (props) => {

        const { data: { itemList }, seter, children: renderItem } = props;
        const realList = itemList.map((item) => {
            const { id } = item;
            return <li className='list-group-item' key={id}
            onClick={() => { seter(id) }}>
                {renderItem(item)}
            </li>
        });
        return (
            <ul className='list-group item-list'>
                { realList }
            </ul>
        )
};

export default ItemList

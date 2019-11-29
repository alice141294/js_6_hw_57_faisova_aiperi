import React from 'react';

const item = (props) =>{
    return(
        <div className='itemContainer'>
            <div className='item' key={props.title}>
                <span className='title'>Title: {props.title}</span>
                <span className='price'>Price: {props.price}</span>
                <button className='delete' onClick={props.remove}>Remove</button>
            </div>
        </div>
    );
};
export default item;
import React from "react";

const Card = (props) =>{
    return (
    <>
        <div className='card'>
            <h3>{props.heading}</h3>
            <p>{props.info}</p>
            <button>{props.samosaCount}</button>
        </div>
    </>)

}

export default Card;
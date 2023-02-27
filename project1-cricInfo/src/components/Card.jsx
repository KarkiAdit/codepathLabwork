import React from "react";

const Card = (props) => {
    return (
            <div className="card-content">
                <img src={props.playerImageSrc} alt={props.playerName} />
                <h2>{props.playerName}</h2>
                <p>{props.playerInfo}</p>
                <button>Read all</button>
            </div>);
}

export default Card;
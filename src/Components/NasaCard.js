import React from "react";

const NasaCard = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <div>
                <p>{props.explanation}</p>
                <img src={props.url} alt="Cool pic"></img>
            </div>
        </div>
    )
}
export default NasaCard;
import React from "react";

const NasaCard = props => {
    return (
        <div>
            <h2>Title: {props.title}</h2>
            <p>Date: {props.date}</p>
            <div>
                <p>Explanation: {props.explanation}</p>
                <img src={props.url} alt="Cool pic"></img>
            </div>
        </div>
    )
}
export default NasaCard;
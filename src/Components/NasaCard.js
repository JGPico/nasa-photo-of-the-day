import React from "react";

const NasaCard = props => {
    return (
        <div className="card">
            <h2>Title: {props.title}</h2>
            <p>Date: {props.date}</p>
            <div className="inner-box">
                <p>Explanation: {props.explanation}</p>
                <div className="img-holder">
                    <img src={props.url} alt="Cool pic"></img>
                </div>
                
            </div>
        </div>
    )
}
export default NasaCard;
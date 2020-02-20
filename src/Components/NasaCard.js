import React from "react";
import styled from "styled-components";

const CardBit = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 75%;
background-color: lightgrey;
margin: 2%;
`;

const InnerBox = styled.div`
display: flex;
flex-direction: column;
width: 75%;

`;


const NasaCard = props => {
    return (
        <CardBit>
            <h2>Title: {props.title}</h2>
            <p>Date: {props.date}</p>
            <InnerBox>
                <p>Explanation: {props.explanation}</p>
                <div className = "img-holder">
                    <img src={props.url} alt="Cool pic"></img>
                </div>
                
            </InnerBox>
        </CardBit>
    )
}
export default NasaCard;
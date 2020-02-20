import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import styled from "styled-components";

const BackgroundHolder = styled.div`
    display: flex;
    justify-content: center;
    background-image: url("../Assets/Galaxy.jpg");
`;

const CardHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 2%;
    background: #5787cf;
`;

const SwitchButton = styled.button`
    height: 40px;
    width: 100px;
    background: darkgrey;
    border-radius: 25%;
`;


export default function NasaList() {

    const [nasaInfo, setNasaInfo] = useState([]);
    const [day, setDay] = useState(1);

    function dayUp() {
        if (day < 30) {
            setDay(day => day + 1);
        } else {
            setDay(1);
        }
    }

    function dayDown() {
        if (day > 1) {
            setDay(day => day - 1);
        } else {
            setDay(30);
        }
    }

    useEffect(()=> {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=E6U2FPAaDsk5SGEeaVtBlwh9KvF3UKzTFAq3ofyI&date=2020-01-${day}`)
    .then(response => {
        //console.log(response)
        setNasaInfo(response.data);
    }).catch(error => {
        console.log('Shit has hit the space fan', error);
    });
    },[day]);

    console.log("this is the info", nasaInfo);
    console.log("this is the day", day);

    return (
        <BackgroundHolder>
            <CardHolder>
                <SwitchButton onClick={dayDown}>Previous</SwitchButton>
                <NasaCard 
                        explanation={nasaInfo.explanation}
                        url={nasaInfo.url}
                        title={nasaInfo.title}
                        date={nasaInfo.date}/>
                <SwitchButton onClick={dayUp}>Next</SwitchButton>        

                {/* {nasaInfo && nasaInfo.map((element, index) => {
                    return (
                        <NasaCard key= {index}
                        explanation={element.explanation}
                        url={element.url}
                        title={element.title}
                        date={element.date} />
                    )
                })} */}
            </CardHolder>
        </BackgroundHolder>
    )

}
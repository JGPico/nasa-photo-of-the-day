import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaList() {

    const [nasaInfo, setNasaInfo] = useState([]);

    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        //console.log(response)
        setNasaInfo(response.data);
    }).catch(error => {
        console.log('The shit has hit the space fan', error);
    });
    },[]);

    console.log("this is the info", nasaInfo);

    return (
        <div>
            {Object.entries(nasaInfo).map(element => {
                return (
                    <NasaCard 
                    explanation={element.explanation}
                    url={element.url}
                    title={element.title}
                    date={element.date} />
                )
            })}
        </div>
    )

}
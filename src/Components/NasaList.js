import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaList() {

    const [nasaInfo, setNasaInfo] = useState([]);
    //const [day, setDay] = useState('today');

    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=E6U2FPAaDsk5SGEeaVtBlwh9KvF3UKzTFAq3ofyI')
    .then(response => {
        //console.log(response)
        setNasaInfo(response.data);
    }).catch(error => {
        console.log('Shit has hit the space fan', error);
    });
    },[]);

    console.log("this is the info", nasaInfo);

    return (
        <div>
            
            <NasaCard 
                    explanation={nasaInfo.explanation}
                    url={nasaInfo.url}
                    title={nasaInfo.title}
                    date={nasaInfo.date}/>

            {/* {nasaInfo && nasaInfo.map((element, index) => {
                return (
                    <NasaCard key= {index}
                    explanation={element.explanation}
                    url={element.url}
                    title={element.title}
                    date={element.date} />
                )
            })} */}
        </div>
    )

}
import { useState,useEffect } from "react"
import { ACCESS_API, VIDEO_DATA } from "./constant";


const useFetchVideo = (videoId) => {
    const [videoData , setVideoData] = useState(null);

    const fetchData = async () =>{
        const data = await fetch(`${VIDEO_DATA}${videoId}${ACCESS_API}`);
        const json = await data.json();
        setVideoData(json.items[0]);
    }

    useEffect(()=>{
        fetchData();
    },[])


  return videoData;
}

export default useFetchVideo
import { useState , useEffect } from "react";
import VideoCart from "./VideoCart";

const VideoContainer = () => {

    const [videoData , setvideoData] = useState(null); 

    useEffect(()=>{
        fetchData();
    },[]);

const fetchData = async () =>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=5&key=${import.meta.env.VITE_YOUTUBE_API}`);
    const json = await data.json();
    setvideoData(json);
}


if(videoData === null) return null;
return (
    <div className="w-full ">
        <VideoCart data={videoData.items[0]} />
    </div>
  )
}

export default VideoContainer;
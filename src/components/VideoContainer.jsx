import { useState , useEffect } from "react";
import VideoCart from "./VideoCart";

const VideoContainer = () => {

    const [videoData , setvideoData] = useState(null); 

    useEffect(()=>{
        fetchData();
    },[]);

const fetchData = async () =>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=2&key=${import.meta.env.VITE_YOUTUBE_API}`);
    const json = await data.json();
    setvideoData(json.items);
    console.log(json);
}


if(videoData === null) return null;
return (
    <div className="w-full flex flex-wrap gap-1">
        {
            videoData.map((data)=>{
                return <VideoCart key={data.id} data={data} />
            })
        }
    </div>
  )
}

export default VideoContainer;
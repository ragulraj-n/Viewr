import { useState , useEffect } from "react";
import VideoCart from "./VideoCart";
import { VIDEO_URL,ACCESS_API } from "../utils/constant";

const VideoContainer = () => {
    const [videoData , setvideoData] = useState(null); 

    useEffect(()=>{
        fetchData();
    },[]);

const fetchData = async () =>{
    const data = await fetch(`${VIDEO_URL}${ACCESS_API}`);
    const json = await data.json();
    setvideoData(json.items);
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
import { useEffect, useState } from "react";
import { ACCESS_API, CHANNEL_URL } from "./constant";

const useFetchChannel = (channelId) => {
    const [channelData , setChannelData] = useState(null);

    const fetchData = async () =>{
        console.log(`${CHANNEL_URL}${channelId}&key=${ACCESS_API}`);
        const data = await fetch(`${CHANNEL_URL}${channelId}&key=${ACCESS_API}` );
        const json = await data.json();
        setChannelData(json);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return channelData;
}

export default useFetchChannel;
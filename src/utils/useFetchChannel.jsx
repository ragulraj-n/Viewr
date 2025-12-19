import { useEffect, useState } from "react";
import { ACCESS_API, CHANNEL_URL } from "./constant";

const useFetchChannel = (channelId) => {
    const [channelData , setChannelData] = useState(null);

    const fetchData = async () =>{
        const data = await fetch(`${CHANNEL_URL}${channelId}${ACCESS_API}` );
        const json = await data.json();
        setChannelData(json?.items[0]);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return channelData;
}

export default useFetchChannel;
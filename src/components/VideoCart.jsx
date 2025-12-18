import useFetchChannel from "../utils/useFetchChannel";

const  VideoCart = ({data}) =>{

    const {channelTitle , title ,channelId} =  data.snippet;    
    const {url} = data.snippet.thumbnails.high;
    const {viewCount} = data.statistics;
    const channelData = useFetchChannel(channelId);
    
  
    return (
    <div className="flex flex-col w-[25%] border ">
        <img className="p-1 py-2 rounded-md " src={url} /> 
       <h1 className="font-semibold text-md">{title}</h1>
       <div>
        <img src="" />
       <p className=" font-medium text-sm">{channelTitle}</p>
       </div>
       <p className="text-xs">{viewCount} views</p>

    </div>)
}

export default VideoCart;
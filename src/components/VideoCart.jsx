import useFetchChannel from "../utils/useFetchChannel";

const  VideoCart = ({data}) =>{

    const {channelTitle , title ,channelId} =  data?.snippet;    
    const  {url:videoThumbnail} = data?.snippet?.thumbnails?.high;
    const {viewCount} = data?.statistics;
    const channelData = useFetchChannel(channelId);
    const {url: channelProfile } = channelData?.snippet?.thumbnails?.high;
  
    return (
    <div className="flex flex-col w-[33%] shadow ">
        <img className="p-1 py-2 rounded-3xl h-80 " src={videoThumbnail} /> 
        <div className="flex w-full">
            <div className="w-[20%] flex justify-center items-center  ml-1">
                <img className="rounded-full h-auto w-auto" src={channelProfile} />
            </div>
            <div className=" flex flex-col gap-1 ml-2"><div>
                <h1 className="font-semibold text-[16px] line-clamp-2">{title}</h1>
            </div>
                <p className=" font-medium text-sm">{channelTitle}</p>
                <p className="text-xs">{viewCount} views</p>
            </div>
        </div>

    </div>)
}

export default VideoCart;
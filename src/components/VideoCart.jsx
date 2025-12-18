

const  VideoCart = ({data}) =>{
    console.log(data);
    const {channelTitle , title ,channelId} =  data.snippet;
    const {url} = data.snippet.thumbnails.high;
    const {viewCount} = data.statistics;
    
    console.log(channelTitle + title + viewCount);
    return (
    <div className="flex flex-col w-[25%] border ">
        <img className="p-1 py-2 rounded-md " src={url} /> 
       <h1 className="font-semibold text-md">{title}</h1>
       <p className=" font-medium text-sm">{channelTitle}</p>
       <p className="text-xs">{viewCount} views</p>

    </div>)
}

export default VideoCart;
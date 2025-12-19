import { useParams, useSearchParams } from "react-router-dom"
import useFetchVideo from "../utils/useFetchVideo";

const VideoWatch = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const videoData = useFetchVideo(videoId);
    console.log(videoData);
    if(videoData === null) return (<div></div>);
    const {title , description} = videoData?.snippet;
    const {likecount , commantCount , viewCount} = videoData?.snippet?.statistics;

  return (
    <div className="pl-2 w-[70%] ">
    
      <div className="w-[full] h-120">
        <iframe className="w-full h-full rounded-md"  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
        <div>
          <h1 className="font-bold text-[21px]">{title}</h1>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default VideoWatch;
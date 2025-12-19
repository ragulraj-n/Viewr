import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import useFetchVideo from "../utils/useFetchVideo";
import { BellIcon, ThumbsDown, ThumbsUp } from "lucide-react";
import useFetchChannel from "../utils/useFetchChannel";
const VideoWatch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [showDiscription, setShowDiscription] = useState(false);
  const videoData = useFetchVideo(videoId);
  const channelId = videoData?.snippet?.channelId;
  //console.log(videoData);
  const channelData = useFetchChannel(channelId);
  if (videoData === null || channelData === null) return <div></div>;
  const { title, description } = videoData?.snippet;
  const { likeCount, commantCount, viewCount } = videoData?.statistics;
  const channelName = channelData?.snippet?.title;
  const channelLogo = channelData?.snippet?.thumbnails?.high?.url;
  const { subscriberCount } = channelData?.statistics;

  const handleClick = () =>{
    setShowDiscription((prev)=>!prev);
  }
  return (
    <div className="px-3 pt-px w-[70%]">
      <div className="w-[full] h-150">
        <iframe
          className="w-full h-full rounded-md cursor-pointer"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h1 className="font-bold text-[21px]">{title}</h1>
        <div className="flex border border-gray-200 justify-between mb-3">
          <div className="flex w-[30%] items-center">
            <img src={channelLogo} className="h-14 w-14 rounded-full"></img>
            <div className="flex flex-col ml-2 justify-center">
              <h1 className="font-semibold text-lg">{channelName}</h1>
              <p className="font-sans text-sm">{subscriberCount}</p>
            </div>
            <BellIcon className="ml-5" />
          </div>
          <div className="w-full flex ml-50 items-center">
            <div className="flex bg-gray-100  border-gray-100 border-r-0 rounded-l-full p-1.25">
              <ThumbsUp size={23} />
              {Number((likeCount - (likeCount % 1000)) / 1000)} |
            </div>
            <div className="flex bg-gray-100 border-l-0 border-gray-100 rounded-r-full p-1.25">
              <ThumbsDown size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-2xl cursor-pointer" onClick={handleClick}>
        {showDiscription ? (
          <p>{description}</p>
        ) : (
          <p className="line-clamp-3">{description}</p>
        )}
      </div>
    </div>
  );
};

export default VideoWatch;

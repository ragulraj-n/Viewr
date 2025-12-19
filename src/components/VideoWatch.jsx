import { useParams, useSearchParams } from "react-router-dom"

const VideoWatch = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    console.log(`https://www.youtube.com/embed/${videoId}` );
  return (
    <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoWatch
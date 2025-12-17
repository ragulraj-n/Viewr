const SideBar = () => {
  const itemClass =
    "w-40 p-1 px-6 flex justify-center hover:bg-gray-300 hover:rounded-md cursor-pointer";

  const sectionClass =
    "border-b border-gray-300 mb-5 pb-5 flex flex-col items-center gap-1.5";

  return (
    <div className="font-normal w-1/8 flex flex-col mt-[1px] pt-6 bg-gray-50 pl-5 text-lg">
      
      <div className={sectionClass}>
        <p className={itemClass}>Home</p>
        <p className={itemClass}>Shorts</p>
      </div>

      <div className={`${sectionClass} text-[15px]`}>
        <h2 className="text-lg font-semibold">Subscription &gt;</h2>
        <p className={itemClass}>Madan Gowri</p>
        <p className={itemClass}>VJ Sidhu</p>
        <p className={itemClass}>A2D Channel</p>
        <p className={itemClass}>TakeUForward</p>
        <p className={itemClass}>Akshay Saini</p>
      </div>

      <div className={`${sectionClass} text-[15px]`}>
        <h2 className="text-lg font-semibold">You &gt;</h2>
        <p className={itemClass}>History</p>
        <p className={itemClass}>Playlist</p>
        <p className={itemClass}>Watch Later</p>
        <p className={itemClass}>Liked Videos</p>
        <p className={itemClass}>Show More</p>
      </div>

    </div>
  );
};

export default SideBar;

import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import VideoContainer from "./components/VideoContainer";


const App = () =>{

  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
  <div className="m-1">
      <Header setIsShowMenu={setIsShowMenu}/>
      <div className="flex gap-5">
        {isShowMenu && <SideBar />} 
       <VideoContainer />
      </div>
  
  </div>)
}

export default App;
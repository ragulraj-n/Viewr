import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import VideoContainer from "./components/VideoContainer";


const App = () =>{

  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
  <div className="m-1">
      <Header setIsShowMenu={setIsShowMenu}/>
     {isShowMenu && <SideBar />} 
     <VideoContainer />
  </div>)
}

export default App;
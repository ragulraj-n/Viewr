import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import VideoContainer from "./components/VideoContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoWatch from "./components/VideoWatch";


const App = () =>{

  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
   <BrowserRouter>
      <div className="m-1 mb-10">
        <Header setIsShowMenu={setIsShowMenu} />

        <div className="flex gap-5">
          {isShowMenu && <SideBar />}

          <Routes>
            <Route path="/" element={<VideoContainer />} />
            <Route path="/watch" element={<VideoWatch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    )
}

export default App;
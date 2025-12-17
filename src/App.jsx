import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";


const App = () =>{

  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
  <div className="m-2">
      <Header setIsShowMenu={setIsShowMenu}/>
     {isShowMenu && <SideBar />} 
  </div>)
}

export default App;
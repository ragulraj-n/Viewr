
const Header = () =>{
    
    return (
        <div className="flex shadow-lg h-12 items-center m-2 py-3 bg-gray-100">
            <div className="w-1/24">
            <img className="ml-3 h-6 m-0.5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZCzgqnZxPhuFIcoKaatzy6sAMDuF-bXkkQ&s" />
            </div>
            <div className="w-3/24">
                <img className="h-7 my-0.5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
            </div>
            <div className="w-9/12 flex justify-center items-center mr-15">
            <input className="h-8 border border-gray-500 w-[50%] rounded-l-full p-2 pl-3 focus:outline-none
"/>
            <label className="border border-gray-300 bg-gray-400 h-8 flex items-center p-2 rounded-r-full">Search</label>
            </div> 
            <div className="w-1/12 flex justify-end">
                <img className="h-8 mr-10 rounded-full" src="https://pbs.twimg.com/profile_images/1959148927153741824/rZ1IvENB_400x400.jpg" />
            </div>
        </div>
    )
}

export default Header;
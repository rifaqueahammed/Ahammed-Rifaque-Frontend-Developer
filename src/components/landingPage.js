import React from "react";
import DataGrid from "./dataGrid";
import SearchBar from "./searchBar";


function LandingPage() {
 
    return (
    <div className="font-NotoSans">
      <nav className="w-full p-2">
        <img src="images/SpacexLogo.jpg" alt="" className="w-48 h-16"></img>
      </nav>
      <div
        className="w-auto md:w-full h-screen lg:h-screen bg-cover saturate-50"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/Christians.png')`,
        }}
      >
        <div className="bg-black bg-opacity-40 h-80 lg:h-screen flex justify-start items-center">
          <div className="w-1/2 p-10">
            <h1 className="text-white">UPCOMING LUANCH</h1>
            <h1 className="text-white font-bold text-3xl mt-2">
              STARLINK MISSION
            </h1>
            <button className="text-white border p-2 mt-2 font-semibold hover:bg-white hover:text-black">
              WATCH
            </button>
          </div>
        </div>
      </div>
      <SearchBar/>
      <DataGrid/>
    </div>
  );
}

export default LandingPage;

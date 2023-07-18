import React, { useState, useEffect } from "react";
import axios from "axios";
import { addData } from "../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";

function DataGrid() {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://api.spacexdata.com/v3/rockets").then((res) => {
      dispatch(addData(res.data));
    });
  }, [dispatch]);

  const [selectedItem, setSelectedItem] = useState(null);

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md overflow-hidden mb-8 sm:mb-10 hover:shadow-lg"
            onClick={() => openPopup(item)}
          >
            <img src={item.flickr_images[0]} alt="" className="w-full h-48" />
            <div className="p-5 ">
              <h2 className="font-semibold text-xl text-black">
                Name: {item.rocket_name}
              </h2>
              <h2 className="font-semibold text-xl text-black">
                Country: {item.country}
              </h2>
              <h2 className="font-semibold">Company: {item.company}</h2>
              <p className="text-blue-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              Status :{selectedItem.active ? "Active" : "Not Active"}
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              Country :{selectedItem.country}
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              Cost per Launch :{selectedItem.cost_per_launch}
            </h2>
            <p className="text-blue-700">{selectedItem.description}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataGrid;

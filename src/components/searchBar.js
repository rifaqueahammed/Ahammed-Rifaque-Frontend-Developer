import React, { useState } from "react";

function SearchBar() {
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");

  const handleSearch = () => {
    console.log(country, status, company);
  };

  return (
    <div className="shadow-lg m-5 p-5 border flex justify-around items-center">
      <select
        value={country}
        className="shadow-md p-2"
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        <option value="term1-1">Usa</option>
        <option value="term1-2">Republic of the Marshall Islands</option>
      </select>
      <select
        value={status}
        className="shadow-md p-2"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="term2-1">Active</option>
        <option value="term2-2">Not Active</option>
      </select>
      <select
        value={company}
        className="shadow-md p-2"
        onChange={(e) => setCompany(e.target.value)}
      >
        <option value="">Select Company</option>
        <option value="term3-1">SpaceX</option>
      </select>
      <button
        className="bg-black p-2 w-1/5 text-white font-bold"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

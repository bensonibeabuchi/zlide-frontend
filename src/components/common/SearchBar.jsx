import React, { useState, useEffect, useRef } from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Link from 'next/link';
import axios from 'axios';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const [slides, setSlides] = useState([])

  const fetchPresentation = async () => {
    try {
        const access = localStorage.getItem('access'); // Assuming you have stored the token in local storage
        // const response = await axios.get('http://localhost:8000/api/presentation/generate-slides/', {
        const response = await axios.get('https://zlide-backend-production.up.railway.app/api/presentation/generate-slides/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`
        },
        });
        setSlides(response.data);
        // console.log('SEARCH BAR DETAILS' ,response);
    } catch (error) {
        console.error('SEARCH RETRIEVE ERROR:', error);
    }
};

  useEffect(() => {
    fetchPresentation();
  }, []);


  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const results = searchThroughData(query);
    setSearchResults(results);
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const searchThroughData = (query) => {
    const results = slides?.filter((slide) =>
    slide.presentation_name.toLowerCase().includes(query.toLowerCase())
    );

    return results;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  return (
   
    <div className='relative z-50' ref={searchRef}>
      <HiMiniMagnifyingGlass size={25} className='absolute top-4 left-4 text-gray-500 pointer-events-none' />
      <input
        type="search"
        name="search"
        id="search"
        value={searchQuery}
        onChange={handleSearch}
        className='p-4 pl-12 w-full rounded-2xl border border-gray-300'
        placeholder="Search slides..."
      />
     <div className="absolute z-1 mt-1 bg-white overflow-y-auto shadow-lg w-full rounded-xl">
        {searchResults?.map((slide, index) => (
          <div key={index} className="p-4 rounded-lg cursor-pointer">
            <Link href={`/slide/draft/${slide.id}`}>
              <div className="flex flex-row w-full rounded-lg">
                <div className="truncate hover:bg-[#fcedc0] w-full p-2 border-b border-b-[#1F1053] flex-col">
                  <p className="truncate pl-4 text-black font-bold ">{slide.presentation_name}</p>
                  <p className="text-gray-500 text-sm pl-4 ">{formatDate(slide.created_at)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

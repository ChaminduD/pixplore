import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

function App() {
  const [images, setImages] = useState([]);              // Stores fetched images
  const [page, setPage] = useState(1);                   // Current page for pagination
  const [keyword, setKeyword] = useState("");            // Search input value
  const [hasSearched, setHasSearched] = useState(false); // Tracks whether a search has been made
  const [isLoading, setIsLoading] = useState(false);     // Indicates if images are currently being fetched

  const accessKey = "ANYm4xj7ypuZiZqDfwHdFhq4WAe1Rctaz78i_dhA87E"; // Unsplash API access key

  // Fetch images from Unsplash API
  const searchImages = async (customPage = 1, newSearch = false, customKeyword = keyword) => {
    setIsLoading(true); // Show loading state during fetch
    
    const url = `https://api.unsplash.com/search/photos?page=${customPage}&query=${customKeyword}&client_id=${accessKey}&per_page=12`;

    try{
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;

      if(newSearch){
        // If it's a new search, replace the image array
        setImages(results);
        setPage(1);
      }else{
        // Otherwise, append new unique images to the existing list
        setImages(prev => {
          const unique = results.filter(
            (result) => !prev.some((img) => img.id === result.id)
          );
          return [...prev, ...unique];
        });
        setPage(customPage);
      }
    }catch(error){
      console.error("Error fetching images:", error); // Log errors if any
    }

    setIsLoading(false); // Stop loading
  }

  // Handles search form submission
  function handleSearch(e){
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    e.target.querySelector("input")?.blur(); // Hide keyboard by blurring input
    setHasSearched(true);
    searchImages(1, true); // New search always starts from page 1
  }

  // Load more images when "Show More" is clicked
  function showMore(){
    const nextPage = page + 1;
    searchImages(nextPage, false);
  }

  // Resets the search and returns to initial state
  function resetSearch(){
    setImages([]);
    setPage(1);
    setKeyword("");
    setHasSearched(false);
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Main content wrapper */}
      <div className='grow'>
        {/* Top search bar and header */}
        <Header
          keyword={keyword}
          setKeyword={setKeyword}
          handleSearch={handleSearch}
          hasSearched={hasSearched}
          resetSearch={resetSearch}
        />

        {/* Image gallery and results */}
        <Main
          images={images}
          showMore={showMore}
          setKeyword={setKeyword}
          searchImages={searchImages}
          setHasSearched={setHasSearched}
          hasSearched={hasSearched}
          isLoading={isLoading}
          checkKeyword={keyword}
        />
      </div>

      {/* Footer section */}
      <Footer/>

      {/* Scroll to Top button */}
      <ScrollToTop/>
    </div>
  )
}

export default App;

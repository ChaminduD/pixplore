import PropTypes from 'prop-types';
import Button from './Button.jsx';
import Spinner from './Spinner.jsx';

function Main({
    images,
    showMore,
    setKeyword,
    searchImages,
    setHasSearched,
    hasSearched,
    isLoading,
    checkKeyword
}){
    // Suggested keywords for quick access
    const keywords = [
        "Nature", "Technology", "Wildlife", "Architecture", "Fashion",
        "Travel", "Abstract", "Food", "Art", "Landscape"
    ];

    // Handles clicking on a keyword button
    function handleKeywordSearch(keyword){
        setKeyword(keyword);              // Set the selected keyword
        searchImages(1, true, keyword);   // Trigger image search
        setHasSearched(true);             // Mark that a search has been made
    }

    return(
        <main>
            

            {/* No images found after a search (not loading) */}
            {images.length === 0 && hasSearched && !isLoading &&
                (<p className="font-base text-primary text-base text-center p-2">No results found. Try a different keyword.</p>)
            }

            {/* Initial state or no search performed yet — show popular searches */}
            {images.length === 0 &&
                (<section className="my-12 md:mb-32 px-4 md:px-0 md:w-[560px] md:justify-self-center">
                    <h2 className="text-light2 text-2xl font-display">Popular Searches</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                        {keywords.map((keyword, index) => (
                            <button
                                key={index}
                                className="bg-linear-150 from-dark via-dark to-secondary hover:via-secondary active:via-light2 text-white font-bold font-base p-4 rounded-2xl shadow-lg cursor-pointer transition duration-300 ease-in-out"
                                onClick={() => handleKeywordSearch(keyword)}
                            >
                                {keyword}
                            </button>
                        ))}
                    </div>
                </section>)
            }
            
            {/* Displaying images when results exist */}
            {images.length > 0 &&
                (<>
                    <section className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-2 lg:w-[977px] lg:justify-self-center lg:gap-4 lg:px-0">
                        {images.map((image, index) => (
                            <a
                                key={`${image.id}-${index}`}
                                href={image.links.html}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group overflow-hidden rounded-2xl"
                            >
                                {/* Image description overlay on hover */}
                                <p className="absolute text-white font-base bottom-0 p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-dark to-transparent w-full z-10">
                                    {image.alt_description}
                                </p>

                                {/* Main image with animation on load and hover */}
                                <img
                                    src={image.urls.small}
                                    alt={image.alt_description || "Unsplash image"}
                                    className="aspect-square md:aspect-4/3 object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105 opacity-0 scale-90"
                                    onLoad={(e) => {
                                        e.target.classList.remove("opacity-0", "scale-90");
                                        e.target.classList.add("opacity-100", "scale-100");
                                    }}
                                />
                            </a>
                        ))}
                    </section>

                    {/* Show a loading spinner when loading */}
                    {isLoading && <Spinner />}

                    {/* Show More button (disabled if keyword is empty) */}
                    <div className="text-center mt-4 mb-8 lg:mt-8 lg:mb-16">
                        <Button text="Show More" onClick={showMore} disabled={!checkKeyword.trim()}/>
                    </div>
                </>) 
            }
        </main>
    );
}

Main.propTypes ={
    images: PropTypes.array.isRequired,
    showMore: PropTypes.func.isRequired,
    setKeyword: PropTypes.func.isRequired,
    searchImages: PropTypes.func.isRequired,
    setHasSearched: PropTypes.func.isRequired,
    hasSearched: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    checkKeyword: PropTypes.string.isRequired,
};

export default Main;
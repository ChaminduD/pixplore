import PropTypes from "prop-types";

function Header({ keyword, setKeyword, handleSearch, hasSearched, resetSearch }){

    return(
        // Header becomes sticky only after a search is performed
        <header className={`${hasSearched ? 'bg-background sticky top-0 z-50' : ''}`}>
            <section
                className={`flex flex-col gap-9 md:gap-12 md:justify-self-center transition-all duration-500 ease-in-out
                ${hasSearched ? 'gap-[0.5rem] pb-2 w-full  sm:flex-row sm:p-2 sm:items-center md:gap-[1rem] md:px-4 lg:py-4 lg:px-0 lg:w-[977px]' : ''}`}
            >
                {/* App title. Clicking it resets the search */}
                <h1
                    onClick={resetSearch}
                    className={`w-fit mx-auto text-5xl font-display text-white text-center mt-12 md:mt-32 cursor-pointer transition-all duration-500 ease-in-out hover:text-primary active:text-light2
                    ${hasSearched ? 'text-xl mt-[0.5rem] sm:mt-0 sm:text-2xl md:mt-[0]' : ''}`}
                >
                    Pixplore
                </h1>

                {/* Search form */}
                <form
                    onSubmit={handleSearch}
                    className={`flex items-center justify-center gap-2 w-full px-2 md:px-0 md:w-[560px]
                    ${hasSearched ? 'sm:px-0 md:w-full' : ''}`}
                >
                    {/* Input field for search */}
                    <input
                        type="text"
                        placeholder="Search anything here..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="text-white placeholder:text-light2 placeholder:opacity-70 font-base text-base bg-dark p-4 rounded-2xl shadow-lg grow focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    />

                    {/* Submit button with search icon */}
                    <button
                        type="submit"
                        className="bg-linear-to-b from-primary to-secondary hover:to-primary active:from-secondary active:to-secondary p-4 rounded-2xl shadow-lg cursor-pointer transition duration-300 ease-in-out"
                    >
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2508 8.12381C16.2508 9.91652 15.6687 11.5725 14.6882 12.9161L19.6338 17.8646C20.1221 18.3528 20.1221 19.1456 19.6338 19.6338C19.1455 20.1221 18.3525 20.1221 17.8642 19.6338L12.9186 14.6853C11.5748 15.6696 9.91845 16.2476 8.1254 16.2476C3.6369 16.2476 0 12.6114 0 8.12381C0 3.63619 3.6369 0 8.1254 0C12.6139 0 16.2508 3.63619 16.2508 8.12381ZM8.1254 13.748C8.86412 13.748 9.59561 13.6025 10.2781 13.3199C10.9606 13.0372 11.5807 12.623 12.1031 12.1007C12.6254 11.5784 13.0398 10.9584 13.3225 10.2761C13.6052 9.59373 13.7507 8.86239 13.7507 8.12381C13.7507 7.38523 13.6052 6.65389 13.3225 5.97153C13.0398 5.28917 12.6254 4.66917 12.1031 4.14692C11.5807 3.62466 10.9606 3.21039 10.2781 2.92775C9.59561 2.64511 8.86412 2.49963 8.1254 2.49963C7.38668 2.49963 6.65519 2.64511 5.9727 2.92775C5.29021 3.21039 4.67008 3.62466 4.14773 4.14692C3.62537 4.66917 3.21102 5.28917 2.92832 5.97153C2.64562 6.65389 2.50012 7.38523 2.50012 8.12381C2.50012 8.86239 2.64562 9.59373 2.92832 10.2761C3.21102 10.9584 3.62537 11.5784 4.14773 12.1007C4.67008 12.623 5.29021 13.0372 5.9727 13.3199C6.65519 13.6025 7.38668 13.748 8.1254 13.748Z" fill="white"/>
                        </svg>
                    </button>
                </form>
            </section>
        </header>
        
    );
}

Header.propTypes = {
    keyword: PropTypes.string.isRequired,
    setKeyword: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    hasSearched: PropTypes.bool.isRequired,
    resetSearch: PropTypes.func.isRequired,
};

export default Header;
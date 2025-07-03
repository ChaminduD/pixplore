import { natureKeywords, aestheticKeywords } from "../data/keywords";

function SearchDropdown({
    searchResults,
    setSearchResults,
    isOpen,
    setIsOpen,
    setKeyword,
    searchImages,
    setHasSearched
}){
    function handleKeywordSearch(keyword){
        setKeyword(keyword);              // Set the selected keyword
        searchImages(1, true, keyword);   // Trigger image search
        setHasSearched(true);             // Mark that a search has been made
        if (!searchResults.includes(keyword)) {
            setSearchResults(prev => [keyword, ...prev]);
        } else {
            setSearchResults(prev => {
                const filtered = prev.filter(result => result !== keyword);
                return [keyword, ...filtered];
            })
        }
        setIsOpen(false); // Close dropdown after search
    }
    
    return(
        <div className={`absolute w-full bg-dark border-secondary rounded-2xl shadow-xl/20 z-10 p-4 mt-1 ${isOpen ? 'block' : 'hidden'}`}>
            <div>
                <div className='flex items-center justify-between'>
                    <h6 className='text-light2 font-bold font-base text-base'>recent searches</h6>
                    <button type='button' className={`font-display text-base text-light hover:text-primary cursor-pointer transition duration-300 ease-in-out ${searchResults.length === 0 ? 'hidden' : ''}`} onClick={() => setSearchResults([])}>clear</button>
                </div>
                <div className='mt-4'>
                    <ul className='flex flex-wrap gap-2'>
                        {searchResults.length > 0 ? (
                            searchResults.map((result, index) => (
                                <li key={index}>
                                    <button type="button" className="font-base shrink-0 text-white font-bold border-[1px] rounded-2xl p-4 border-secondary hover:bg-secondary active:bg-background cursor-pointer transition duration-300 ease-in-out" onClick={() => handleKeywordSearch(result)}>{result}</button>
                                </li>
                            ))
                        ) : (
                            <li className='font-base text-xs text-white'>No recent searches</li>
                        )}
                    </ul>
                </div>
            </div>

            <div>
                <div className='flex items-center justify-between mt-6'>
                    <h6 className='text-light2 font-bold font-base text-base'>nature & landscape</h6>
                </div>
                <div className='mt-4'>
                    <ul className='flex flex-wrap gap-2'>
                        {natureKeywords.map((keyword, index) => (
                            <li key={index}>
                                <button type="button" className="font-base shrink-0 text-white font-bold border-[1px] rounded-2xl p-4 border-secondary bg-linear-150 from-dark via-dark to-secondary hover:via-secondary active:bg-background cursor-pointer transition duration-300 ease-in-out" onClick={() => handleKeywordSearch(keyword)}>{keyword}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <div className='flex items-center justify-between mt-6'>
                    <h6 className='text-light2 font-bold font-base text-base'>aesthetic vibes</h6>
                </div>
                <div className='mt-4'>
                    <ul className='flex flex-wrap gap-2'>
                        {aestheticKeywords.map((keyword, index) => (
                            <li key={index}>
                                <button type="button" className="font-base shrink-0 text-white font-bold border-[1px] rounded-2xl p-4 border-secondary bg-linear-150 from-dark via-dark to-secondary hover:via-secondary active:bg-background cursor-pointer transition duration-300 ease-in-out" onClick={() => handleKeywordSearch(keyword)}>{keyword}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchDropdown;
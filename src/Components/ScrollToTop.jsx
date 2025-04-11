import React, { useEffect, useState } from 'react';

function ScrollToTop(){
    const [visible, setVisible] = useState(false); // State to control visibility of the button

    useEffect(() => {
        // Function to toggle visibility based on scroll position
        function handleScroll(){
            setVisible(window.scrollY > 200); // Show button after scrolling down 200px
        }

        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to scroll smoothly to the top
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return(
        // Conditionally render the button only if visible
        visible && (
            <button
                onClick={scrollToTop}
                className="bg-light hover:bg-primary active:bg-white w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[52px] lg:h-[52px] flex justify-center items-center fixed bottom-6 lg:bottom-12 xl:bottom-14 right-6 lg:right-12 xl:right-16 rounded-full shadow-lg transition-all duration-300 z-50 cursor-pointer overflow-hidden animate-bounce"
            >
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99996 24C7.96874 24 6.31575 22.325 6.31575 20.2667V14.3381C4.91207 15.6125 2.60084 15.5565 1.25488 14.195C-0.181964 12.7403 -0.181964 10.3709 1.25488 8.9161L9.99996 0.0544128L18.7451 8.9161C20.1819 10.3709 20.1819 12.7403 18.7451 14.195C17.4015 15.5577 15.0866 15.6137 13.6842 14.3381V20.2667C13.6842 22.325 12.0312 24 9.99996 24ZM8.77189 8.33743V20.2667C8.77189 20.9524 9.32207 21.5111 9.99996 21.5111C10.6779 21.5111 11.228 20.9524 11.228 20.2667V8.33743L15.2721 12.4354C15.7375 12.9058 16.5431 12.9058 17.0086 12.4354C17.4887 11.9488 17.4887 11.1623 17.0086 10.6757L9.99996 3.5737L2.99137 10.6757C2.51119 11.1623 2.51119 11.9488 2.99137 12.4354C3.45681 12.9058 4.26242 12.9058 4.72786 12.4354L8.77189 8.33743Z" fill="#543C52"/>
                </svg>
            </button>
        )
    );
}

export default ScrollToTop;
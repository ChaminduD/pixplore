function Footer(){
    return(
        // Footer container with background and rounded top corners
        <footer className="flex gap-2 flex-col sm:flex-row sm:gap-1 justify-center items-center bg-dark py-4 rounded-tl-2xl rounded-tr-2xl">
            <p className="text-light2 font-base text-xs">
                {/* Attribution text with link to Unsplash */}
                Powered by <a
                    href="https://unsplash.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light font-bold hover:text-primary active:text-white transition duration-300 ease-in-out"
                >
                    Unsplash API
                </a>
                .
            </p>
            <p className="text-light2 font-base text-xs">
                {/* Copyright text with link to portfolio */}
                &copy; {new Date().getFullYear()} <a
                    href="https://chamindud.github.io/my-portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-light font-bold hover:text-primary active:text-white transition duration-300 ease-in-out"
                >
                    Chamindu Dahanayaka
                </a>
            </p>
        </footer>
    );
}

export default Footer;
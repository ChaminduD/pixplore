import PropTypes from "prop-types";

function Button({ text, onClick, disabled = false }){
    return(
        <button
            onClick={onClick}
            disabled={disabled}
            className={`text-white text-base font-display bg-linear-to-b from-primary to-secondary hover:to-primary active:from-secondary active:to-secondary px-6 py-3 rounded-2xl shadow-lg cursor-pointer transition duration-300 ease-in-out w-max
            ${disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : "" }`}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}

export default Button;
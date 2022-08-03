import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="bg-black px-3 py-2 text-white font-bold rounded-md hover:bg-sky-400 dark:hover:bg-sky-400 dark:hover:text-white transition-all dark:bg-white dark:text-black">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

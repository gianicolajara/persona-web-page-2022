import PropTypes from "prop-types";

const Title = ({ children, bold = false, line = false }) => {
  return (
    <div className="w-max">
      <h2
        className={`${
          bold && "font-bold"
        } text-4xl text-gray-700 dark:text-dark-hardlight`}
      >
        {children}
      </h2>
      {line && <div className="w-full h-2 bg-sky-400"></div>}
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;

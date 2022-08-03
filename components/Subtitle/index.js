import PropTypes from "prop-types";

const Subtitle = ({ children, bold = false, line = false }) => {
  return (
    <div className="w-max">
      <h3
        className={`${
          bold && "font-bold"
        } text-2xl text-gray-700 dark:text-dark-hardlight`}
      >
        {children}
      </h3>

      {line && (
        <div className="w-full border-t-4 border-dashed border-sky-500"></div>
      )}
    </div>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  line: PropTypes.bool,
};

export default Subtitle;

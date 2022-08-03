import PropTypes from "prop-types";
const Small = ({ children, bold = false }) => {
  return (
    <small
      className={`text-slate-600 dark:text-dark-extralight ${
        bold ? "font-bold" : "font-normal"
      }`}
    >
      {children}
    </small>
  );
};

Small.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
};

export default Small;

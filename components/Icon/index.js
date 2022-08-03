import PropTypes from "prop-types";

const Icon = ({ children, onClick = () => {}, active = false }) => {
  return (
    <div
      className={`${
        !active && "text-gray-700 dark:text-dark-hardlight"
      } hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer transition-all  select-none ${
        active && "text-sky-500 dark:text-sky-500"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default Icon;

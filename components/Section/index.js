import PropTypes from "prop-types";

const Section = ({ children, light = false }) => {
  const bg = light
    ? "bg-gray-200 dark:bg-dark-hard/90"
    : "bg-gray-100/95 dark:bg-dark-hard";

  return <section className={bg}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};

export default Section;

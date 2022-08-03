import PropTypes from "prop-types";

const P = ({
  children,
  bold = false,
  color = "text-slate-600",
  colorDark = "dark:text-dark-extralight",
  hover = false,
  active = false,
}) => {
  return (
    <p
      className={`${!active && color} ${!active && colorDark} ${
        bold ? "font-bold" : "font-normal"
      } ${hover && "hover:text-sky-500 dark:hover:text-sky-500 "} ${
        active && "text-sky-500 dark:text-sky-500"
      }`}
    >
      {children}
    </p>
  );
};

P.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  color: PropTypes.string,
  colorDark: PropTypes.string,
  hover: PropTypes.bool,
  active: PropTypes.bool,
};

export default P;

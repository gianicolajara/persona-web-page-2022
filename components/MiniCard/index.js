import PropTypes from "prop-types";

const MiniCard = ({ children, bg = "border-purple-500" }) => {
  return (
    <div
      className={`w-max bg-sky-500 p-1 rounded-lg text-white dark:shadow-sky-900 shadow-sky-400 shadow-md font-extralight`}
    >
      <small className="font-bold">{children}</small>
    </div>
  );
};

MiniCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MiniCard;

import PropTypes from "prop-types";

const Wrapper = ({ children, last = false, anchor = "" }) => {
  return (
    <div
      className={`max-w-[1024px] w-full h-full mx-auto ${
        last && "pb-10"
      } pt-10`}
      id={anchor}
    >
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  last: PropTypes.bool,
  anchor: PropTypes.string,
};

export default Wrapper;

import PropTypes from "prop-types";

const Description = ({ children, bold = false, line = false }) => {
  return (
    <div className="w-max">
      <h4 className={`${bold && "font-bold"} text-[1.2em] text-sky-400`}>
        {children}
      </h4>

      {line && (
        <div className="w-full border-t-4 border-dashed border-sky-500"></div>
      )}
    </div>
  );
};

Description.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  line: PropTypes.bool,
};

export default Description;

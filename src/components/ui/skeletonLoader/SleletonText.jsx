import PropTypes from "prop-types";

const SkeletonText = ({ width, height }) => {
  return (
    <div
      className={`bg-gray-300 rounded ${width} ${height} animate-pulse`}
    ></div>
  );
};

SkeletonText.propTypes = {
  width: PropTypes.string, // Width should be a string, e.g., 'w-3/4'
  height: PropTypes.string, // Height should be a string, e.g., 'h-4'
};

SkeletonText.defaultProps = {
  width: "w-3/4", // Default width for long text
  height: "h-4", // Default height for text
};

export default SkeletonText;

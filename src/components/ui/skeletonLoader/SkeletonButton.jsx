import PropTypes from "prop-types";

const SkeletonButton = ({ width, height }) => {
  return (
    <div
      className={`bg-gray-300 rounded ${width} ${height} animate-pulse`}
    ></div>
  );
};

SkeletonButton.propTypes = {
  width: PropTypes.string, // Width should be a string, e.g., 'w-1/3'
  height: PropTypes.string, // Height should be a string, e.g., 'h-10'
};

SkeletonButton.defaultProps = {
  width: "w-1/3", // Default width for button
  height: "h-10", // Default height for button
};

export default SkeletonButton;

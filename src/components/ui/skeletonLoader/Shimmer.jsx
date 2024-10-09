import PropTypes from "prop-types";

const Shimmer = ({ width, height }) => {
  return (
    <div
      className={`relative overflow-hidden bg-gray-300 rounded ${width} ${height}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
    </div>
  );
};

Shimmer.propTypes = {
  width: PropTypes.string, // Width should be a string, e.g., 'w-3/4'
  height: PropTypes.string, // Height should be a string, e.g., 'h-4'
};

Shimmer.defaultProps = {
  width: "w-3/4",
  height: "h-4",
};

export default Shimmer;

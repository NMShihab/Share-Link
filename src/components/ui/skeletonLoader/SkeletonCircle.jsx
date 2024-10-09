import PropTypes from "prop-types";

const SkeletonCircle = ({ size }) => {
  return (
    <div className={`rounded-full bg-gray-300 ${size} animate-pulse`}></div>
  );
};

SkeletonCircle.propTypes = {
  size: PropTypes.string, // Validates size as a string, e.g., 'h-12 w-12'
};

SkeletonCircle.defaultProps = {
  size: "h-12 w-12", // Default size
};

export default SkeletonCircle;

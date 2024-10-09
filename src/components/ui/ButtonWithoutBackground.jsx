import PropTypes from "prop-types";

const ButtonWithoutBackground = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-white border-2 border-indigo-600  text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonWithoutBackground.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ButtonWithoutBackground;

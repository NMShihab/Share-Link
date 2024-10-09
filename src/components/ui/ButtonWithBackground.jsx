import PropTypes from "prop-types";

const ButtonWithBackground = ({ children, onClick }) => {
  return (
    <button
      className="bg-indigo-600 border-2 border-indigo-600  text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default ButtonWithBackground;

import PropTypes from "prop-types";

const ButtonWithIcon = ({ children, onClick, isnavSelected }) => {
  return (
    <button
      className={`flex items-center  px-4 py-2 rounded-md text-sm font-medium justify-center gap-2 ${
        isnavSelected ? `bg-indigo-300 text-indigo-600` : `bg-white`
      } hover:bg-indigo-300 hover:text-indigo-600`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonWithIcon.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isnavSelected: PropTypes.bool,
};
export default ButtonWithIcon;

import PropTypes from "prop-types";

const Heading = ({ title, description }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="pt-2 text-gray-400 text-lg">{description}</p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Heading;

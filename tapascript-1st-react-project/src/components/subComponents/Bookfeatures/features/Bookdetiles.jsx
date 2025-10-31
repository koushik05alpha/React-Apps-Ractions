import PropTypes from "prop-types";

function Bookdetiles({ title, author }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="text-gray-300">{author}</p>
    </div>
  );
}

Bookdetiles.protoTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Bookdetiles;

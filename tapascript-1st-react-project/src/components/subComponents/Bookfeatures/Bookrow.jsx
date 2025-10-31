import Bookdetiles from "./features/Bookdetiles";
import FeaturesBook from "./features/FeaturesBook";
import PropTypes from "prop-types";

function Bookrow({ book }) {
  return (
    <>
      <Bookdetiles title={book.title} author={book.author} />

      <FeaturesBook features={book.features} />
    </>
  );
}

Bookrow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bookrow;


import Book from "./Book";

import PropTypes from "prop-types";

const BookSearchDetails = ({ results, shelfs, onClassify }) => {
  /* useEffect(() => {
    
       }, [results]);*/

  return (
    <div>
      {results.length > 0
        ? results.map((item) => {
            return (
              <Book
                key={item.id}
                book={item.book}
                shelfs={shelfs}
                onClassify={onClassify}
              />
            );
          })
        : "There is no results to display"}
    </div>
  );
};

BookSearchDetails.propTypes = {
  results: PropTypes.array.isRequired,
  shelfs: PropTypes.array.isRequired,
  onClassify: PropTypes.func.isRequired,
};
export default BookSearchDetails;

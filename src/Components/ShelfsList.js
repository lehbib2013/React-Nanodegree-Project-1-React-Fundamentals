import BookSearch from "./BookSearch";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const ShelfsList = ({ books, onClassify }) => {
  const shelfs = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];

  let shelf1 =
    books.length > 0
      ? books.filter((c) => c.book.shelf == "currentlyReading")
      : [];
  let shelf2 =
    books.length > 0 ? books.filter((c) => c.book.shelf === "wantToRead") : [];
  let shelf3 =
    books.length > 0 ? books.filter((c) => c.book.shelf === "read") : [];

  /*  useEffect(() => {
   
      for (const item of books) {
       console.log(item["shelf"]);
        if (item["shelf"] === "Currently Reading") {
          shelf1.concat(item);
        }
        if (item.shelf === "Want to Read") {shelf2.concat(item);}
        if (item.shelf === "Read" ) {shelf3.concat(item);}
       
      }
      console.log("bookssss");
      console.log(books);
      console.log("shelfssss");
      console.log(shelf1);
         }, [books]); */

  return (
    <div>
      <Link to="/search" className="back-button">
        search
      </Link>

      <Shelf
        key={0}
        shelfs={shelfs}
        shelfDesignation={shelfs[0].title}
        shelfBooks={shelf1}
        onClassify={onClassify}
      />

      <Shelf
        key={1}
        shelfs={shelfs}
        shelfDesignation={shelfs[1].title}
        shelfBooks={shelf2}
        onClassify={onClassify}
      />

      <Shelf
        key={2}
        shelfs={shelfs}
        shelfDesignation={shelfs[2].title}
        shelfBooks={shelf3}
        onClassify={onClassify}
      />
    </div>
  );
};
ShelfsList.propTypes = {
  books: PropTypes.array.isRequired,
  onClassify: PropTypes.func.isRequired,
};
export default ShelfsList;

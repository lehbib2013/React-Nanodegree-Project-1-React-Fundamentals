import React from "react";
import { useState, useEffect } from "react";
import ControleChanger from "./ControleChanger";
import Box from "@material-ui/core/Box";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const Item = styled(Paper)`
  background-color: #8fa4e3;
  border: 5px red solid;
  padding: theme.spacing(1);
  textalign: "center";
  color: theme.palette.text.secondary;
`;
const BoxBook = styled(Box)`
  align-text: right;
  border-raduis: 5px;
  border: blue 2px solid;
  background-repeat: no-repeat;
`;
const Book = ({ book, shelfs, onClassify }) => {
  useEffect(() => {
    //   console.log("book...");
    //      console.log(book);
    //    getBooks();
  }, []);

  // imageLinks subtitle authors publisher description previewLink  language
  return (
    <BoxBook>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>
          <p>{book.title}</p>
          <ControleChanger
            key={book.id}
            shelfs={shelfs}
            book={book}
            onClassify={onClassify}
          />
        </Item>
        <Item>
          <img src={book.imageLinks ? book.imageLinks.thumbnail : ""} />
        </Item>
      </Stack>
    </BoxBook>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfs: PropTypes.array.isRequired,
  onClassify: PropTypes.func.isRequired,
};
export default Book;

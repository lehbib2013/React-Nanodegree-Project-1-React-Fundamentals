import React from "react";

import ControleChanger from "./ControleChanger";
import Box from "@material-ui/core/Box";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

import PropTypes from "prop-types";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const InfoZone = styled(Paper)`
  background-color: #fcba03;
  border: 0px red solid;
  padding: theme.spacing(1);
  textalign: "LEFT";
  color: theme.palette.text.secondary;
`;
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


  // imageLinks subtitle authors publisher description previewLink  language
  return (
    <BoxBook>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2} >
       
       <InfoZone>
          <List  sx={{
        width: '100%',
        maxWidth: 200,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 150,
        '& ul': { padding: 0 },
      }}  subheader={<li />} >
          <p>{book.title}</p>
          <hr/>
          <ul>
            By: 
      {book.authors?book.authors.map((author)=>{
         return  (<ListItem key={`item-${author}`}>
             <p>{book.author}</p>
           <ListItemText primary={author} />
         </ListItem>)
          }):"There are no authors"}
         </ul>
       </List>
       </InfoZone>
          
       
        <Item>
        <ControleChanger
            key={book.id}
            shelfs={shelfs}
            book={book}
            onClassify={onClassify}
          />
          <img src={book.imageLinks ? book.imageLinks.thumbnail : ""} alt="description " />
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

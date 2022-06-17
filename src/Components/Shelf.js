import Book from "./Book";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)`
  background-color: #8fa4e3;
  border: 5px blue solid;
  padding: theme.spacing(1);
  textalign: "center";
  color: theme.palette.text.secondary;
  backround-image: ;
`;
const CustomizedCard = styled(Card)`
  color: #121211;
  border: blue 2px dashed;
  background-color: #fc9d03;

  :hover {
    color: #2e8b57;
    background-color: #fcce03;
  }
`;
const Shelf = ({ shelfs, shelfDesignation, shelfBooks, onClassify }) => {
  return (
    <CustomizedCard sx={12}>
      <Typography variant="h3" component="div" gutterBottom>
        {shelfDesignation}
      </Typography>
      <CardContent>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {shelfBooks.length > 0
            ? shelfBooks.map((item) => {
                return (
                  <Grid item xs={3} sm={4} md={4} key={item.book.id}>
                    <Item key={item.book.id}>
                      {
                        <Book
                          book={item.book}
                          shelfs={shelfs}
                          onClassify={onClassify}
                        />
                      }
                    </Item>
                  </Grid>
                );
              })
            : "No books on this shelf"}
        </Grid>
      </CardContent>
    </CustomizedCard>
  );
};
Shelf.propTypes = {
  shelfs: PropTypes.array.isRequired,
  shelfDesignation: PropTypes.string.isRequired,
  shelfBooks: PropTypes.array.isRequired,
  onClassify: PropTypes.func.isRequired,
};
export default Shelf;

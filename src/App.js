import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Styles/Our.css";
//import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import ShelfsList from "./Components/ShelfsList";
import * as BooksAPI from "./BooksAPI";
import BookSearch from "./Components/BookSearch";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

/* some code was inspired from https://mui.com/ and other ressources on the web */
const App = () => {
  // let navigate = useNavigate();
  const [books, setBooks] = useState([]);
  //const [results,setResults] = useState([]);

  // let dict = {};
  const shelfs = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];

  const classify = async (book, shelf) => {
    let updatedBooks = [];
    console.log("updating...");
    console.log(shelf);
    console.log(book);
    book.shelf = shelf;
    let resp = await BooksAPI.update(book, shelf);
    console.log("resp");
    console.log(resp);

    // let currentIds=[...resp.currentlyReading, ...resp.wantToRead,...resp.read,book];
    getBooks();
  };

  const getBooks = async () => {
    let dict = [];
    const res = await BooksAPI.getAll();
    let allBooks = res.books;
    console.log("res");
    console.log(allBooks);
    for (let el of allBooks) {
      let obj = { id: el.id, book: el };
      dict.push(obj);
    }
    console.log(dict);
    setBooks(dict);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ShelfsList books={books} shelfs={shelfs} onClassify={classify} />
          }
        />

        <Route
          path="/search"
          element={
            <BookSearch books={books} shelfs={shelfs} onClassify={classify} />
          }
        />
      </Routes>
    </div>
  );
};
export default App;

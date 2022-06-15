import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ControleChanger = ({ shelfs, book, onClassify }) => {
  useEffect(() => {
    console.log("shelfs");
    console.log(shelfs);
    //    getBooks();
  }, []);

  const applyChanges = (e) => {
    console.log("event.target.value");
    console.log(e);
    // setShelfBook();
    console.log(e);
    // setAge(e);
    onClassify(book, e);
  };
  //
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Shelf</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={book.shelf ? book.shelf : "-1"}
          label="Shelf"
        >
          <MenuItem value="-1">
            <em>Assign to shelf</em>
          </MenuItem>
          {shelfs.map((shelf) => {
            return (
              <MenuItem
                key={shelf.id}
                value={shelf.id}
                onClick={() => {
                  applyChanges(shelf.id);
                }}
              >
                {shelf.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
ControleChanger.propTypes = {
  shelfs: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
  onClassify: PropTypes.func.isRequired,
};
export default ControleChanger;

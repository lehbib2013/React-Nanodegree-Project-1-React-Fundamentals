import React from "react";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ControleChanger = ({ shelfs, book, onClassify }) => {


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
            <em>None</em>
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

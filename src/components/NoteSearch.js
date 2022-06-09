import React from "react";
import { FormControl } from "react-bootstrap";

const NoteSearch = ({ onSearch }) => {
  const onSearchChangeHandler = ({ target }) => {
    onSearch(target.value);
  };

  return (
    <>
      <FormControl
        type="search"
        className="me-2"
        placeholder="Search notes by title"
        aria-label="Search notes by title"
        onChange={onSearchChangeHandler}
      />
    </>
  );
}

export default NoteSearch;

import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

class NoteSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSearchChangeHandler = (event) => {
    this.props.onSearch(event.target.value)
  }

  render() {
    return (
      <>
        <FormControl
          type="search"
          placeholder="Search notes"
          className="me-2"
          aria-label="Search notes"
          onChange={this.onSearchChangeHandler}
        />
      </>
    )
  }
}

export default NoteSearch
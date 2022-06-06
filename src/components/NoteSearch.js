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
          type='search'
          className='me-2'
          placeholder='Search notes by title'
          aria-label='Search notes by title'
          onChange={this.onSearchChangeHandler}
        />
      </>
    )
  }
}

export default NoteSearch
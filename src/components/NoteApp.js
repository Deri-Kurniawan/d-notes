import React, { Component } from 'react';
import { getInitialData } from '../utils';
import NotesInput from './NoteInput';
import NotesList from './NoteList';

class NotesApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData()
    };
  };

  onAddNoteHandler = (noteProperties) => {
    const id = this.state.notes.length + 1;
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          ...noteProperties,
          archieved: false,
          createdAt: new Date().toISOString(),
        }
      ]
    });
  };

  onDeleteNoteHandler = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  render() {
    return (
      <>
        <h1>D-Notes</h1>
        <NotesInput addNote={this.onAddNoteHandler} />
        <NotesList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} />
      </>
    );
  };
}

export default NotesApp;
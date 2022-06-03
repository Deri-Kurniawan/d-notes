import React, { Component } from 'react';
import { getInitialData } from '../utils';
import NotesInput from './NoteInput';
import NotesList from './NoteList';
import { v4 as uuidv4 } from 'uuid';

class NotesApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData()
    };
  };

  onAddNoteHandler = (noteProperties) => {
    const id = uuidv4();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          ...noteProperties,
          archived: false,
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
  
  archiveNoteHandler(id, status) {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.archived = status;
        }
        return note;
      })
    });
  }

  onArchiveNoteHandler = (id) => {
    this.archiveNoteHandler(id, true);
  }

  onUnarchiveNoteHandler = (id) => {
    this.archiveNoteHandler(id, false)
  }

  render() {
    const notesArchived = this.state.notes.filter(note => note.archived);
    const notesUnarchived = this.state.notes.filter(note => !note.archived);

    return (
      <>
        <h1>D-Notes</h1>
        <NotesInput addNote={this.onAddNoteHandler} />
        <h2>Notes</h2>
        <NotesList notes={notesUnarchived} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} />
        <h2>Archived</h2>
        <NotesList notes={notesArchived} onDelete={this.onDeleteNoteHandler} onUnarchive={this.onUnarchiveNoteHandler} />
      </>
    );
  };
}

export default NotesApp;
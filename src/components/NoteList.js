import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, onDelete }) => {
  if(notes.length === 0) {
    return <h2>Tidak ada Catatan</h2>
  }

  return (
    <ol>
      {
        notes.map((note) => (
          <NoteItem
          key={note.id}
          {...note}
          id={note.id}
          onDelete={onDelete}
          />
        ))
      }
    </ol>
  );
}

export default NotesList;
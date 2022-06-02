import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, onDelete }) => {
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
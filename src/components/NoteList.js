import React from 'react'
import NoteItem from './NoteItem'

const NotesList = ({ notes, onDelete, onArchive, onUnarchive }) => {
  if(notes.length === 0) {
    return <p>Tidak ada Catatan</p>
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
          onArchive={onArchive}
          onUnarchive={onUnarchive}
          />
        ))
      }
    </ol>
  )
}

export default NotesList
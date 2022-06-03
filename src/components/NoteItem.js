import React from 'react'
import { showFormattedDate } from '../utils'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import UnarchiveButton from './UnarchiveButton'

const NoteItem = ({
  title,
  body,
  archived,
  createdAt,
  id,
  onDelete,
  onArchive,
  onUnarchive, 
}) => {
  return (
    <li>
      <ul>
        <li>Title: {title}</li>
        <li>Body: {body}</li>
        <li>Archieved: {(archived === true) ? 'yes': 'no'}</li>
        <li>Created At: {showFormattedDate(createdAt)}</li>
        <DeleteButton id={id} onDelete={onDelete} />
        {(onArchive) ? <ArchiveButton id={id} onArchive={onArchive} /> : null}
        {(onUnarchive) ? <UnarchiveButton id={id} onUnarchive={onUnarchive} /> : null}
      </ul>
    </li>
  )
}

export default NoteItem
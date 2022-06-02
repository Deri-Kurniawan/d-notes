import React from 'react';
import { showFormattedDate } from '../utils';
import DeleteButton from './DeleteButton';

const NoteItem = ({ title, body, archieved, createdAt, id, onDelete }) => {
  return (
    <li>
      <ul>
        <li>Title: {title}</li>
        <li>Body: {body}</li>
        <li>Archieved: {(archieved) ? 'yes': 'no'}</li>
        <li>Created At: {showFormattedDate(createdAt)}</li>
        <DeleteButton id={id} onDelete={onDelete} />
      </ul>
    </li>
  )
}

export default NoteItem;
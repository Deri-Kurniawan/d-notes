import React from 'react'
import { showFormattedDate } from '../utils'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import UnarchiveButton from './UnarchiveButton'
import { Card } from 'react-bootstrap'

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
    <>
      <Card>
        <Card.Header><span>{showFormattedDate(createdAt)}</span></Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <DeleteButton id={id} onDelete={onDelete} />
          {(onArchive) ? <ArchiveButton id={id} onArchive={onArchive} /> : null}
          {(onUnarchive) ? <UnarchiveButton id={id} onUnarchive={onUnarchive} /> : null}
        </Card.Footer>
      </Card>
    </>
  )
}

export default NoteItem
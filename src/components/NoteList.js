import React from 'react'
import NoteItem from './NoteItem'
import { Row, Col, Alert } from 'react-bootstrap'

const NotesList = ({ notes, onDelete, onArchive, onUnarchive }) => {
  if(notes.length === 0) {
    return <Alert variant='danger'>Tidak ada catatan</Alert>
  }

  return (
    <Row xs={1} md={1} lg={1} xl={2} xxl={2} className="g-4">
      {
        notes.map((note) => (
          <Col key={note.id}>
            <NoteItem
            {...note}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            />
          </Col>
        ))
      }
      </Row>
  )
}

export default NotesList
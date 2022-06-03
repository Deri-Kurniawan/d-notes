import React from 'react'
import { Button } from 'react-bootstrap'
import { ArchiveFill } from 'react-bootstrap-icons'

const UnarchiveButton = ({ id, onUnarchive }) => {
  return <Button className='m-1' variant='primary' onClick={() => onUnarchive(id)} title='Unarchive this note'><ArchiveFill /></Button>
}

export default UnarchiveButton
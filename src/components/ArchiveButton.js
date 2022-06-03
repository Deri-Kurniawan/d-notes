import React from 'react'

const ArchiveButton = ({ id, onArchive }) => {
  return <button onClick={() => onArchive(id)}>Archive</button>
}

export default ArchiveButton
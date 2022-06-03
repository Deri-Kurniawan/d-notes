import React from 'react';

const UnarchiveButton = ({ id, onUnarchive }) => {
  return <button onClick={() => onUnarchive(id)}>Unarchive</button>
};

export default UnarchiveButton;
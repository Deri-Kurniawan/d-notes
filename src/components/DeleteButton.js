import React from 'react';

const DeleteButton = ({ id, onDelete }) => {
  return <button onClick={() => onDelete(id)}>Delete</button>
};

export default DeleteButton;
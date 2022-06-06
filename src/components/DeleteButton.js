import React from "react";
import { Button } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <Button
      className="m-1"
      variant="danger"
      onClick={() => onDelete(id)}
      title="Delete this note"
    >
      <TrashFill />
    </Button>
  );
};

export default DeleteButton;

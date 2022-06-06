import React from "react";
import { Button } from "react-bootstrap";
import { Archive } from "react-bootstrap-icons";

const ArchiveButton = ({ id, onArchive }) => {
  return (
    <Button
      className="m-1"
      variant="primary"
      onClick={() => onArchive(id)}
      title="Archive this note"
    >
      <Archive />
    </Button>
  );
};

export default ArchiveButton;

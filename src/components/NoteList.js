import React from "react";
import NoteItem from "./NoteItem";
import { Row, Col, Alert, Card } from "react-bootstrap";

const NotesList = ({ notes, onDelete, onArchive, onUnarchive, keyword }) => {
  if (notes.length > 0) {
    notes = notes.filter((note) => {
      if (keyword === "") {
        return note;
      }
      if (note.title.toLowerCase().includes(keyword.toLowerCase())) {
        return note;
      }
      return false;
    });
  }

  if (keyword.length > 0 && notes.length === 0) {
    return (
      <Card className="shadow rounded">
        <Alert className="mt-3 mx-3" variant="danger">
          Notes by title <b>{keyword}</b> not found!
        </Alert>
      </Card>
    );
  }

  if (keyword.length === 0 && notes.length === 0) {
    return (
      <Card className="shadow rounded">
        <Alert className="mt-3 mx-3" variant="danger">
          Notes is empty
        </Alert>
      </Card>
    );
  }

  return (
    <Card className="shadow rounded">
      <Row xs={1} md={1} lg={1} xl={2} xxl={2} className="g-3 p-3">
        {notes.map((note) => (
          <Col key={note.id}>
            <NoteItem
              {...note}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              onUnarchive={onUnarchive}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default NotesList;

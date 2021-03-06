import React, { Component } from "react";
import { getInitialData } from "../utils";
import NotesInput from "./NoteInput";
import NotesList from "./NoteList";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
    };
  }

  onAddNoteHandler = ({ title, body }) => {
    const id = uuidv4();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: (title.length > 0) ? title : "Untitled Note",
          body: (body.length > 0) ? body : "Blank note",
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    });
  };

  onDeleteNoteHandler = (id) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id),
    });
  };

  archiveNoteHandler(id, status) {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.archived = status;
        }
        return note;
      }),
    });
  }

  onArchiveNoteHandler = (id) => {
    this.archiveNoteHandler(id, true);
  };

  onUnarchiveNoteHandler = (id) => {
    this.archiveNoteHandler(id, false);
  };

  onSearchNoteHandler = (keyword) => {
    this.setState({ keyword });
  };

  render() {
    const archivedNotes = this.state.notes.filter((note) => note.archived);
    const unarchivedNotes = this.state.notes.filter((note) => !note.archived);

    return (
      <>
        <NavigationBar onSearch={this.onSearchNoteHandler} />
        <Container>
          <h1 className="text-center my-3">D-Notes</h1>
          <NotesInput addNote={this.onAddNoteHandler} />
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xll={6}>
              <h2 className="text-center my-3">Notes</h2>
                <NotesList
                  notes={unarchivedNotes}
                  onDelete={this.onDeleteNoteHandler}
                  onArchive={this.onArchiveNoteHandler}
                  keyword={this.state.keyword}
                />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xll={6}>
              <h2 className="text-center my-3">Archived</h2>
                <NotesList
                  notes={archivedNotes}
                  onDelete={this.onDeleteNoteHandler}
                  onUnarchive={this.onUnarchiveNoteHandler}
                  keyword={this.state.keyword}
                />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default NotesApp;

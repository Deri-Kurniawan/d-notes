import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleCharMaxLimit: 50,
      titleCharLimitRemaining: 50,
      titleClassName: "text-success",
      bodyCharMaxLimit: 250,
      bodyCharLimitRemaining: 250,
      bodyClassName: "text-success",
    };
  }

  textLimitColoring = (maxLength, charLimitRemaining) => {
    let className = "";

    if (maxLength * (100 / 100) >= charLimitRemaining) {
      className = "text-success";
    }

    if (maxLength * (50 / 100) >= charLimitRemaining) {
      className = "text-warning";
    }

    if (maxLength * (25 / 100) >= charLimitRemaining) {
      className = "text-danger";
    }

    return className;
  };

  textLimiter = (text, maxLength) => {
    let textLimitRemaining = 0;
    
    if ((text.length + 1) > maxLength) {
      text = text.substr(0, maxLength);
    } else {
      textLimitRemaining = maxLength - text.length;
    }

    const className = this.textLimitColoring(
      maxLength,
      textLimitRemaining
    );

    return {
      text,
      textLimitRemaining,
      className,
    };
  };

  onTitleChangeHandler = (event) => {
    const data = this.textLimiter(
      event.target.value,
      this.state.titleCharMaxLimit
    );

    this.setState({
      title: data.text,
      titleCharLimitRemaining: data.textLimitRemaining,
      titleClassName: data.className,
    });
  };

  onBodyChangeHandler = (event) => {
    const data = this.textLimiter(
      event.target.value,
      this.state.bodyCharMaxLimit
    );

    this.setState({
      body: data.text,
      bodyCharLimitRemaining: data.textLimitRemaining,
      bodyClassName: data.className,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.resetValues();
  };

  resetValues = () => {
    this.setState({
      title: "",
      body: "",
      titleCharLimitRemaining: this.state.titleCharMaxLimit,
      bodyCharLimitRemaining: this.state.bodyCharMaxLimit,
      titleClassName: "text-success",
      bodyClassName: "text-success",
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.onTitleChangeHandler}
              placeholder="Title"
            />
            <small>
              Remaining characters: &nbsp;
              <span className={this.state.titleClassName}>
                {this.state.titleCharLimitRemaining !== 0
                  ? this.state.titleCharLimitRemaining
                  : "Max limit reached"}
              </span>
            </small>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="body">Body</Form.Label>
            <Form.Control
              as="textarea"
              cols="30"
              rows="10"
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.onBodyChangeHandler}
              placeholder="Body"
            ></Form.Control>
            <small>
              Remaining characters: &nbsp;
              <span className={this.state.bodyClassName}>
                {this.state.bodyCharLimitRemaining !== 0
                  ? this.state.bodyCharLimitRemaining
                  : "Max limit reached!"}
              </span>
            </small>
          </Form.Group>
          <Button type="submit" variant="primary">
            Save Note
          </Button>
        </Form>
      </>
    );
  }
}

export default NotesInput;

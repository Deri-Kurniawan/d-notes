import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleMaxLimit: 50,
      titleLimitRemaining: 50,
      titleClassName: "text-success",
      bodyMaxLimit: 250,
      bodyLimitRemaining: 250,
      bodyClassName: "text-success",
    };
  }

  textLimitColoring = (maxLength, textLimitRemaining) => {
    let className = "";

    if (maxLength * (100 / 100) >= textLimitRemaining) {
      className = "text-success";
    }

    if (maxLength * (50 / 100) >= textLimitRemaining) {
      className = "text-warning";
    }

    if (maxLength * (25 / 100) >= textLimitRemaining) {
      className = "text-danger";
    }

    return className;
  };

  textLimiter = (text, maxLength) => {
    let textLimitRemaining = 0;

    if (text.length > maxLength) {
      text = text.substr(0, maxLength);
    } else {
      textLimitRemaining = maxLength - text.length;
    }

    const className = this.textLimitColoring(maxLength, textLimitRemaining);

    return {
      text,
      textLimitRemaining,
      className,
    };
  };

  onTitleChangeHandler = (event) => {
    const data = this.textLimiter(
      event.target.value,
      this.state.titleMaxLimit
    );

    this.setState({
      title: data.text,
      titleLimitRemaining: data.textLimitRemaining,
      titleClassName: data.className,
    });
  };

  onBodyChangeHandler = (event) => {
    const data = this.textLimiter(
      event.target.value,
      this.state.bodyMaxLimit
    );

    this.setState({
      body: data.text,
      bodyLimitRemaining: data.textLimitRemaining,
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
      titleLimitRemaining: this.state.titleMaxLimit,
      bodyLimitRemaining: this.state.bodyMaxLimit,
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
              placeholder="type something..."
            />
            <small>
              Remaining characters: &nbsp;
              <span className={this.state.titleClassName}>
                {this.state.titleLimitRemaining !== 0
                  ? this.state.titleLimitRemaining
                  : "Max limit reached!"}
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
              placeholder="type something..."
            ></Form.Control>
            <small>
              Remaining characters: &nbsp;
              <span className={this.state.bodyClassName}>
                {this.state.bodyLimitRemaining !== 0
                  ? this.state.bodyLimitRemaining
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

import React, { Component } from 'react';

class NotesInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
  }

  onInputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }
  
  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.resetValues();
  }

  resetValues = () => {
    this.setState({
      title: '',
      body: '',
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor='title'></label>
          <input type='text' name='title' id='title' value={this.state.title} onChange={this.onInputChangeHandler} placeholder='Title' />
          <br/>
          <label htmlFor='body'></label>
          <textarea name='body' id='body' value={this.state.body} onChange={this.onInputChangeHandler} cols='30' rows='10' placeholder='Description'></textarea>
          <br/>
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  };
}

export default NotesInput;
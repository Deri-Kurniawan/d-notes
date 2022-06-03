import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

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
    event.preventDefault()
    this.props.addNote(this.state)
    this.resetValues()
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
        <Form onSubmit={this.onSubmitHandler}>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='title'>Title</Form.Label>
              <Form.Control type='text' name='title' id='title' value={this.state.title} onChange={this.onInputChangeHandler} placeholder='Title' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='body'>Body</Form.Label>
              <Form.Control as='textarea' cols='30' rows='10' name='body' id='body' value={this.state.body} onChange={this.onInputChangeHandler} placeholder='Description'></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>Submit</Button>
        </Form>
      </>
    )
  }
}

export default NotesInput
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class NotesInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      titleCharMaxLimit: 50,
      titleCharLimitRemaining: 50,
      bodyCharMaxLimit: 200,
      bodyCharLimitRemaining: 200,
      titleClass: 'text-success',
      bodyClass: 'text-success',
    }
  }

  onTitleChangeHandler = (event) => {
    const maxLength = this.state.titleCharMaxLimit;
    const title = event.target.value;
    const titleLength = title.length;
    const titleCharLimitRemaining = maxLength - titleLength;
    let titleClass = '';

    if(title.length > maxLength) {
      title.splice(0, maxLength);
    }

    if((maxLength * (100/100)) >= titleCharLimitRemaining) {
      titleClass = 'text-success';
    }
    
    if((maxLength * (50/100)) >= titleCharLimitRemaining) {
      titleClass = 'text-warning';
    }

    if((maxLength * (25/100)) >= titleCharLimitRemaining) {
      titleClass = 'text-danger';
    }

    this.setState({
      title,
      titleCharLimitRemaining,
      titleClass,
    });
  }

  onBodyChangeHandler = (event) => {
    const maxLength = this.state.bodyCharMaxLimit;
    const body = event.target.value;
    const bodyLength = body.length;
    const bodyCharLimitRemaining = maxLength - bodyLength;
    let bodyClass = '';

    if(body.length > maxLength) {
      body.splice(0, maxLength);
    }

    if((maxLength * (100/100)) >= bodyCharLimitRemaining) {
      bodyClass = 'text-success';
    }

    if((maxLength * (50/100)) >= bodyCharLimitRemaining) {
      bodyClass = 'text-warning';
    }

    if((maxLength * (25/100)) >= bodyCharLimitRemaining) {
      bodyClass = 'text-danger';
    }

    this.setState({
      body,
      bodyCharLimitRemaining,
      bodyClass,
    });
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
              <Form.Control type='text' name='title' id='title' value={this.state.title} onChange={this.onTitleChangeHandler} placeholder='Title' />
              <small>Limit:&nbsp;
                <span className={this.state.titleClass}>
                 {(this.state.titleCharLimitRemaining !== 0) ? this.state.titleCharLimitRemaining : 'Max limit reached'}
                </span>
              </small>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='body'>Body</Form.Label>
              <Form.Control as='textarea' cols='30' rows='10' name='body' id='body' value={this.state.body} onChange={this.onBodyChangeHandler} placeholder='Body'></Form.Control>
              <small>Limit:&nbsp;
                <span className={this.state.bodyClass}>
                  {(this.state.bodyCharLimitRemaining !== 0) ? this.state.bodyCharLimitRemaining : 'Max limit reached'}
                </span>
              </small>
            </Form.Group>
            <Button type='submit' variant='primary'>Submit</Button>
        </Form>
      </>
    )
  }
}

export default NotesInput
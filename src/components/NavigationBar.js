import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import NoteSearch from './NoteSearch'

const NavigationBar = ({ onSearch }) => {
  return (
    <>
      <Navbar className='shadow rounded' sticky='top' bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/">D-Notes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <div className="d-flex">
              <NoteSearch onSearch={onSearch} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
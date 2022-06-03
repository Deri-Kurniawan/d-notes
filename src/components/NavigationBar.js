import React from 'react'
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <>
      <Navbar className='shadow-rounded' sticky='top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">D-Notes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
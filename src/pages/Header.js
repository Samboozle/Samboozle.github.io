import React from 'react'
import { Jumbotron, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default () => {
  return(
    <div>
      <Jumbotron style={{textAlign: 'center'}}>
        <h1>Samuel Anthony Bates</h1>
      </Jumbotron>
      <Navbar>
        <Nav>
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/skills">Skills</Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}
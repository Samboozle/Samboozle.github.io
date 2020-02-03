import React from 'react'
import { Jumbotron, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default () => {
  return(
    <div>
      <Jumbotron fluid style={{ marginBottom: 0, backgroundColor: '#4b8fea', textAlign: 'center', paddingBottom: '1%', paddingTop: '1.5%'}}>
        <h1 style={{ color: 'white'}}>Samuel Anthony Bates</h1>
      </Jumbotron>
      <Navbar style={{ justifyContent: 'center' }}>
        <Nav variant='tabs' defaultActiveKey='/about'>
          <Nav.Item>
            <Link className='nav-link' to="/about" style={{ color: '#4b8fea' }}>About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link' to="/skills" style={{ color: '#4b8fea' }}>Skills</Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}
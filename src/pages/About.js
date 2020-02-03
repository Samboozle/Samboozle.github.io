import React from 'react'
import { Row, Col, ResponsiveEmbed, Card, Button } from 'react-bootstrap'
import '../styles/iconZone.scss'

export default (props) => {

  const theButton = <Button onClick={props.handleClick}>I'm bored. Click me!</Button>

  return(
    <>
      {props.button || props.aWildButtonAppears() }
      <Row style={{marginBottom: '6%'}}>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img />
            {props.button && theButton}
            <Card.Body>
              {props.aboutText}
            </Card.Body>
            <Card.Footer style={{padding: '0'}}>
              <div className="iconZone">
                <a href="https://github.com/samboozle" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/samboozle" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <ResponsiveEmbed style={{paddingBottom: '37%'}}>
            <object 
              class="embed-responsive-item"
              data="/content/resume.pdf" 
            >
              fail
            </object>
          </ResponsiveEmbed>
        </Col>
      </Row>
    </>
  )
}
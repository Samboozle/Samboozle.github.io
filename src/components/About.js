import React from 'react';
import { Resume } from '../components';
import { Row, Col, ResponsiveEmbed, Card, Button, Accordion } from 'react-bootstrap';
import '../styles/iconZone.scss';

export default (props) => {

  let { handleClick, showButton, aWildButtonAppears, aboutText } = props;

  const theButton = <Button
    variant="danger"
    style={{ padding: '5%', fontSize: '1.2rem' }}
    onClick={ handleClick }>
    Bored? Click me!
  </Button>;

  return(
    <Accordion>
      { showButton || aWildButtonAppears() }
      <Row style={{ marginBottom: '6%' }}>
        <Col xs={12} md={5}>
          <Card>
            <Accordion.Toggle as={ Button } eventKey='0'> See my face! </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Img src='/profile.jpg' height='auto' width='auto' />
            </Accordion.Collapse>
            { showButton && theButton }
            <Card.Body>
              { aboutText }
            </Card.Body>
            <Card.Footer style={{padding: '0'}}>
              <div className="iconZone">
                <a href="https://github.com/samboozle" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/samboozle" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={7}>
          <ResponsiveEmbed style={{ paddingBottom: '37%' }}>
            <object 
              class="embed-responsive-item"
              data="/content/resume.pdf" 
            >
              fail
            </object>
          </ResponsiveEmbed>
          {/* <Resume /> */}
        </Col>
      </Row>
    </Accordion>
  )
}
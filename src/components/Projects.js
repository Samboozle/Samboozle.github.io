import React from 'react';
import { Card, Accordion, Button, Row, Col, Image } from 'react-bootstrap';
import { projects, skills } from '../content';

export default () => {
  return (
    <Accordion>
        {projects.map((project, prIdx) => {
          return (
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} eventKey={prIdx+''}>
                  { project.project }
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={prIdx+''}>
                <Card.Body>
                  <p> {project.description} </p>
                  <p> Technologies used: </p>
                  <Row>
                    { project.technologies.map((tech, teIdx) => {
                      return(
                        <Col xs={3} key={"tech-"+teIdx}>
                          <h4 style={{ textAlign: "center" }}> {tech} </h4>
                          <Image src={ skills.find(skill => skill.skill === tech).icon } fluid />
                        </Col>
                      );
                    }) }
                  </Row>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  > Demo! </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.repo}
                  > Source! </a>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
    </Accordion>
  );
}
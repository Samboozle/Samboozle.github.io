import React from 'react'
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap'

export default () => {
  return(
    <Row>
      <Col xs={12} md={6}>
      </Col>
      <Col xs={12} md={6}>
        <ResponsiveEmbed>
          <object 
            class="embed-responsive-item"
            data="/content/resume.pdf" 
          >
            fail
          </object>
        </ResponsiveEmbed>
      </Col>
    </Row>
  )
}
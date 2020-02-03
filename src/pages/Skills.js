import React from 'react'
import { Card } from 'react-bootstrap'
import skills from '../content/skills'

export default () => {

  const renderSkills = () => {
    return skills.map((v, i) => {
      return(
        <Card style={{borderRadius: '3.6%', marginBottom: '2%'}}>
          <Card.Img style={{ height: '100%', width: '100%' }} src={v.icon} />
          <Card.Title style={{textAlign: 'center'}}>{v.skill}</Card.Title>
          <Card.Body>{v.desc}</Card.Body>
        </Card>
      )
    })
  }

  return(
    <div className='card-columns' style={{justifyContent: 'center', flexDirection: 'row', marginBottom: '6%'}}>
      {renderSkills()}
    </div>
  )
}
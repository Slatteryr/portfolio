import React from 'react'
import { Card, Container } from 'react-bootstrap'


function Home() {

  const me = require('../assets/IMG_0609.JPG')
  const sign = require('../assets/signature_pandadoc.png')

  return (
    <Container>
      <Card>
        <Card.Img
        src={sign}/>
      </Card>
      <Card>
        <Card.Img
        src={me}
        height='600'
        width='350' />
        <Card.Text>Ryan Slattery</Card.Text>
        <Card.Text>Web Developer</Card.Text>
      </Card>
    </Container>
  )
}

export default Home

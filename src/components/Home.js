import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'


function Home() {

  const me = require('../assets/IMG_0609.JPG')
  const sign = require('../assets/signature_pandadoc.png')

  return (
    <Container>
      <Image src={sign}/>
      <Image src={me}
      fluid="true"/>
      {/* <Card border="dark">
        <Card.Img
        src={sign}
        height='300'
        width='5'/>
        <Card.Img
        rounded="true"
        src={me}
        varient="rounded"
        // height='600'
        // width='350'
        />
        <Card.Text>Ryan Slattery</Card.Text>
        <Card.Text>Web Developer</Card.Text>
      </Card> */}
    </Container>
  )
}

export default Home

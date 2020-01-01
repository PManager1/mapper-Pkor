import React from 'react';
import { Container, Row, Col, Visible, Hidden, ScreenClass, ScreenBadge } from 'react-awesome-styled-grid'

const styledgrid = () => (

<Container>
    <Row style={{height: 80}} debug align='center'>
      <Col debug xs={1}>😎</Col>
      <Col debug xs={1}>🤩</Col>
      <Col debug xs={1}>😱</Col>
      <Col debug xs={1}>😍</Col>
    </Row>
    <Row>
      <Col style={{height: 80}} debug xs={4} align='flex-end'>Aligned at bottom</Col>
    </Row>
  </Container>
  ); 

export default styledgrid; 
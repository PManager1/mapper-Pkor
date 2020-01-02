import React from 'react';
import { Container, Row, Col, Visible, Hidden, ScreenClass, ScreenBadge } from 'react-awesome-styled-grid'; 

const styledgrid = () => (<div>

<Container>
    <Row style={{height: 80}} debug align='flex-end'>
      <Col debug xs={1}>😎</Col>
      <Col debug xs={1}>🤩</Col>
      <Col debug xs={1}>😱</Col>
      <Col debug xs={1}>😍</Col>
    </Row>
    
    <br/><br/><br/><br/>

    <Row>
      <Col style={{height: 80}} debug xs={4} align='flex-end'>Aligned at bottom</Col>
    </Row>

    <br/><br/><br/><br/>

    <Row style={{height: 80}} debug align='center'>
      <Col debug xs={2} > FIRST 😎</Col>
      <Col debug xs={1}>😱SECOND </Col>
      <Col debug xs={1} justify='right' >😍 26 - SECOND </Col>
    </Row>

  </Container>


<div> Offet </div>

<Container>
  <Row><Col debug xs={1} sm={1} lg={1} offset={{ xs:3, sm:7, lg:11}}>&nbsp;</Col></Row>
  <Row><Col debug xs={1} sm={1} lg={2} offset={{ xs:3, sm:7, lg:10}}>&nbsp;</Col></Row>
  <Row><Col debug xs={1} sm={2} lg={3} offset={{ xs:3, sm:6, lg:9}}>&nbsp;</Col></Row>
  <Row><Col debug xs={2} sm={3} lg={4} offset={{ xs:2, sm:5, lg:8}}>&nbsp;</Col></Row>
  <Row><Col debug xs={2} sm={4} lg={5} offset={{ xs:2, sm:4, lg:7}}>&nbsp;</Col></Row>
  <Row><Col debug xs={2} sm={5} lg={6} offset={{ xs:2, sm:3, lg:6}}>&nbsp;</Col></Row>
  <Row><Col debug xs={3} sm={5} lg={7} offset={{ xs:1, sm:3, lg:5}}>&nbsp;</Col></Row>
  <Row><Col debug xs={3} sm={5} lg={8} offset={{ xs:1, sm:3, lg:4}}>&nbsp;</Col></Row>
  <Row><Col debug xs={3} sm={6} lg={9} offset={{ xs:1, sm:2, lg:3}}>&nbsp;</Col></Row>
  <Row><Col debug xs={4} sm={7} lg={10} offset={{ xs:0, sm:1, lg:2}}>&nbsp;</Col></Row>
  <Row><Col debug xs={4} sm={8} lg={11} offset={{ xs:0, sm:0, lg:1}}>&nbsp;</Col></Row>
</Container>


<p> left aligned </p>

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



    <Row>
      <Col style={{height: 80}} debug xs={4}  align-items='flex-end'>Horizontally centered</Col>
    </Row>


  </Container>


</div>
  ); 

export default styledgrid; 
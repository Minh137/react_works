import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import Logo from '../components/Logo';
import Search from '../components/Search';

const Header = () => {
  return (
    <Container fluid>
       <Row className="py-3 border-bottom">
          <Col sm={4} lg={3} className="text-center text-sm-start">
              <Logo />  
          </Col>
          <Col sm={{span:6, offset:2}} md={{offset:0}} lg={5} className="d-none d-lg-block">
             <Search />
          </Col>
          <Col sm={8} lg={4} 
               className="d-flex justify-content-end gap-5 
                          align-items-center mt-4 mt-sm-0 justify-content-sm-end">
          
          </Col>
       </Row>
    </Container>    
  )
}

export default Header
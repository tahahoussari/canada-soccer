import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './canadaogo.png';

const Top = () => {
    return ( 
    <Navbar expand="lg" variant="dark" className="top">
      <Container >
        <Col>
            <Row className="logoAndName">
            <a>
                <img src={Image} style={{width:100, height:90}} className="logoPic"></img>
                <h1 className="logoName">Canada Soccer</h1>
            </a>
            </Row>
            <Row className="links">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    
                </Nav>
                </Navbar.Collapse>
            </Row>
        </Col>
        
        
        
      </Container>
    </Navbar>
     );
}
 
export default Top;
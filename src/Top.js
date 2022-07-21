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
                <img src={Image} style={{width:100, height:90}} className="logoPic"></img>
                <h1 className="logoName">Canada Soccer</h1>
            </Row>
            <Row className="links">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#Team">Team</Nav.Link>
                    <Nav.Link href="#Stats">Stats</Nav.Link>
                    <Nav.Link href="#Schedule">Schedule</Nav.Link>
                    <Nav.Link href="#Quizzes">Quizzes</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Row>
        </Col>
        
        
        
      </Container>
    </Navbar>
     );
}
 
export default Top;
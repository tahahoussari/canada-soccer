import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbar = () => {
    return (
        <div className="cont">
            <nav className="navbar">
                <Container>
                    <Col>
                        <div className="logo">
                            <Row>
                                <h1>Canada Soccer</h1>
                            </Row>
                        </div>
                        <div className="links">
                            <Row>
                                <a href="/">Team</a>
                                <a href="/">Schedule</a>
                                <a href="/">Stats</a>
                                <a href="/create">Quizzes</a>
                            </Row>
                        </div>
                    </Col>
                </Container>
            </nav>
        </div>
        
    );
}
 
export default Navbar;
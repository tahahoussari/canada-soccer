import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './teamphoto.jpeg';
import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Borjan from './Players/borjan.jpg';
import Maxime from './Players/maximecrepeau.jpg';
import Dayne from './Players/dayneclair.jpg';
import Steven from './Players/stevenvitoria.jpg';
import Doneil from './Players/doneilhenry.webp';
import Sam from './Players/samadekugbe.jpg';
import Cristian from './Players/cristiangutierrez.jpg';
import Richie from './Players/richielaryea.jpeg';
import Alphonso from './Players/alphonsodavies.jpg';
import Derek from './Players/derekcornelius.jpg';
import Scott from './Players/scottkennedy.jpg';
import Kamal from './Players/kamalmiller.jpg';
import Alistair from './Players/alistairjohnston.jpg';
import Atiba from './Players/atibahutchinson.jpg';
import Jonathan from './Players/jonathanosorio.webp';
import Mark from './Players/mark-anthonykaye.jpg';
import Liam from './Players/liamfraser.jpg';
import Stephen from './Players/stepheneustaq.jpg';
import Tajon from './Players/tajonbuchanan.jpg';
import Ismael from './Players/ismaelkone.png';
import Junior from './Players/juniorhoilett.jpg';
import Lucas from './Players/lucascavallini.jpg';
import Cyle from './Players/cylelarin.jpg';
import Ike from './Players/ikeugbo.jpg';
import LiamMillar from './Players/liammillar.jpg';
import JonathanDavid from './Players/jodavid.jpg';

const Team = () => {
    return ( 
        <Container>
            <Row>
                <h1 className="position">Goalkeepers</h1>
            </Row>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Borjan} />
                    <Card.Body>
                        <Card.Title>#82 Milan Borjan</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Maxime} />
                    <Card.Body>
                        <Card.Title> #16 Maxime Crepeau</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Dayne} />
                    <Card.Body>
                        <Card.Title>Dayne St. Clair</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <h1 className="position">Defenders</h1>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Steven} />
                    <Card.Body>
                        <Card.Title>Steven Vitoria</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Doneil} />
                    <Card.Body>
                        <Card.Title>Doneil Henry</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>    
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Sam} />
                    <Card.Body>
                        <Card.Title>Sam Adekugbe</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Cristian} />
                    <Card.Body>
                        <Card.Title>Cristian Gutierrez</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Richie} />
                    <Card.Body>
                        <Card.Title>Richie Laryea</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Alphonso} />
                    <Card.Body>
                        <Card.Title>Alphonso Davies</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Derek} />
                    <Card.Body>
                        <Card.Title>Derek Cornelius</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Scott} />
                    <Card.Body>
                        <Card.Title>Scott Kennedy</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Kamal} />
                    <Card.Body>
                        <Card.Title>Kamal Miller</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Alistair} />
                    <Card.Body>
                        <Card.Title>Alistair Johnston</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    
                </Col>
                <Col>
                    
                </Col>
            </Row>

            <Row>
                <h1 className="position">Midfielders</h1>
            </Row>

            <Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Atiba} />
                    <Card.Body>
                        <Card.Title>Atiba Hutchinson</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Jonathan} />
                    <Card.Body>
                        <Card.Title>Jonathan Osario</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Mark} />
                    <Card.Body>
                        <Card.Title>Mark-Anthony Kaye</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Liam} />
                    <Card.Body>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Stephen} />
                    <Card.Body>
                        <Card.Title>Stephen Eustaquio</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Tajon} />
                    <Card.Body>
                        <Card.Title>Tajon Buchanan</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Ismael} />
                    <Card.Body>
                        <Card.Title>Ismael Kone</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            </Row>

            <Row>
                <h1 className="position">Attackers</h1>
            </Row>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Junior} />
                    <Card.Body>
                        <Card.Title>Junior Hoilett</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Lucas} />
                    <Card.Body>
                        <Card.Title>Lucas Cavallini</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Cyle} />
                    <Card.Body>
                        <Card.Title>Cyle Larin</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Ike} />
                    <Card.Body>
                        <Card.Title>Ike Ugbo</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={LiamMillar} />
                    <Card.Body>
                        <Card.Title>Liam Fraser</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={JonathanDavid} />
                    <Card.Body>
                        <Card.Title>Jonathan David</Card.Title>
                            <Card.Text>
                                <p>Club:</p>
                                <p>Position:</p>
                                <p>Age:</p>
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default Team;
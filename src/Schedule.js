import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './teamphoto.jpeg';
import React from "react";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Qatar from './qatar.jpg';
import Ecuador from './ecuador.webp';
import Senegal from './senegal.svg';
import Netherlands from './netherlands.png';
import England from './england.webp';
import Iran from './iran.webp';
import USA from './usa.webp';
import Wales from './wales.png';
import Argentina from './argentina.webp';
import Mexico from './mexico.webp';
import Poland from './poland.svg';
import Saudi from './saudiarabia.webp';
import Australia from './australia.svg';
import Denmark from './denmark.png';
import France from './france.png';
import Tunisia from './tunisia.webp';
import Costa from './costarica.png';
import Germany from './germany.webp';
import Japan from './japan.png';
import Spain from './spain.webp';
import Belgium from './belgium.png';
import Canada from './canada.jpg';
import Croatia from './croatia.webp';
import Morocco from './morocco.jpg';
import Brazil from './brazil.png';
import Cameroon from './cameroon.webp';
import Serbia from './serbia.png';
import Switz from './switz.webp';
import Ghana from './ghana.jpg';
import Portugal from './portugal.webp';
import southkorea from './southkorea.png';
import Uruguay from './uruguay.svg';

const Schedule = () => {
    return (  
        <Container>
            <Row className="tables">
                <Col sm="4" className="groupTable">
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="groupHeaderTwo">
                        <Card.Title className="groupHeader"><h1 className="groupHeader">Group A</h1></Card.Title>
                           
                    </Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th></th>
                                <th></th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Qatar</td>
                                <td><img src={Qatar} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ecuador</td>
                                <td><img src={Ecuador} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Senegal</td>
                                <td><img src={Senegal} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Netherlands</td>
                                <td><img src={Netherlands} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card>
                </Col>
                <Col sm="4" className="groupTable">
                <Card style={{ width: '18rem' }} >
                    <Card.Body className="groupHeaderTwo">
                        <Card.Title className="groupHeader"><h1 className="groupHeader">Group B</h1></Card.Title>
                           
                    </Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th></th>
                                <th></th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>England</td>
                                <td><img src={England} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Iran</td>
                                <td><img src={Iran} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>USA</td>
                                <td><img src={USA} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Wales</td>
                                <td><img src={Wales} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card>
                </Col>
                <Col sm="4" className="groupTable">
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="groupHeaderTwo">
                        <Card.Title className="groupHeader"><h1 className="groupHeader">Group C</h1></Card.Title>
                           
                    </Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th></th>
                                <th></th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Argentina</td>
                                <td><img src={Argentina} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mexico</td>
                                <td><img src={Mexico} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Poland</td>
                                <td><img src={Poland} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Saudi Arabia</td>
                                <td><img src={Saudi} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card>
                </Col>
                <Col sm="4" className="groupTable">
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="groupHeaderTwo">
                        <Card.Title className="groupHeader"><h1 className="groupHeader">Group D</h1></Card.Title>
                           
                    </Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th></th>
                                <th></th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Australia</td>
                                <td><img src={Australia} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Denmark</td>
                                <td><img src={Denmark} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>France</td>
                                <td><img src={France} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Tunisia</td>
                                <td><img src={Tunisia} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card>
                </Col>
            </Row>

            <Row className="tablesTwo">
                <Col sm="4" className="groupTable">
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="groupHeaderTwo">
                        <Card.Title className="groupHeader"><h1 className="groupHeader">Group E</h1></Card.Title>
                           
                    </Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th></th>
                                <th></th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Costa Rica</td>
                                <td><img src={Costa} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Germany</td>
                                <td><img src={Germany} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Japan</td>
                                <td><img src={Japan} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Spain</td>
                                <td><img src={Spain} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card>
                </Col>
                <Col sm="4" className="groupTable">
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="groupHeaderTwo">
                        <Card.Title className="groupHeader"><h1 className="groupHeader">Group F</h1></Card.Title>
                           
                    </Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th></th>
                                <th></th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Belgium</td>
                                <td><img src={Belgium} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Canada</td>
                                <td><img src={Canada} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Croatia</td>
                                <td><img src={Croatia} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Morocco</td>
                                <td><img src={Morocco} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card>
                </Col>
                <Col sm="4" className="groupTable">
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="groupHeaderTwo">
                        <Card.Title className="groupHeader"><h1 className="groupHeader">Group G</h1></Card.Title>
                           
                    </Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th></th>
                                <th></th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Brazil</td>
                                <td><img src={Brazil} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cameroon</td>
                                <td><img src={Cameroon} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Serbia</td>
                                <td><img src={Serbia} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Switzerland</td>
                                <td><img src={Switz} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card>
                </Col>
                <Col sm="4" className="groupTable">
                <Card style={{ width: '18rem' }} >
                    <Card.Body className="groupHeaderTwo">
                        <Card.Title className="groupHeader"><h1 className="groupHeader">Group H</h1></Card.Title>
                           
                    </Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th></th>
                                <th></th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ghana</td>
                                <td><img src={Ghana} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Portugal</td>
                                <td><img src={Portugal} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>South Korea</td>
                                <td><img src={southkorea} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Uruguay</td>
                                <td><img src={Uruguay} style={{width:25, height:20}} className="countryPic"></img></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Schedule;
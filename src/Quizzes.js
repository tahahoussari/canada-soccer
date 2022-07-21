import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";


const Quiz = () => {
    return (  
        <Container className="schedule">
            <Row className="quiz">
                <h3 className="warning">*Please note all quizzes will lead to an external website*</h3>
            </Row>
            <Row className="quiz">
                <Col>
                    <h1 className="quizTitle">Canada Soccer</h1>
                </Col>
                <Col>
                    <h1 className="quizTitle">World Cup</h1>
                </Col>
                <Col>
                    <h1 className="quizTitle">General</h1>
                </Col>
            </Row>

            <Row className="quiz">
                <Col>
                    <Button variant="dark" size="lg" href="https://www.sporcle.com/games/idioteque409/canada-national-team">Canada Soccer Quiz</Button>{''}
                </Col>
                <Col>
                    <Button variant="dark" size="lg" href="https://www.sporcle.com/games/happyjoe5/worldcuptop4">World Cup Final Four</Button>{' '}
                </Col>
                <Col>
                    <Button variant="dark" size="lg" href="https://www.sporcle.com/games/g/uefachampionsleague">Champions League Winners</Button>{' '}
                </Col>
            </Row>

            <Row className="quiz">
                <Col>
                    
                </Col>
                <Col>
                    <Button variant="dark" size="lg" href="https://www.sporcle.com/games/g/fifaworldcup">World Cup Winners</Button>{' '}
                </Col>
                <Col>
                    <Button variant="dark" size="lg" href="https://www.sporcle.com/games/JakePFC/eplsquad1">Premier League Winner Team</Button>{' '} 
                </Col>
            </Row>

            <Row className="quiz">
                <Col>
                    
                </Col>
                <Col>
                    <Button variant="dark" size="lg" href="https://www.sporcle.com/games/mselby/most-appearances-in-a-world-cup-final">World Cup Final Teams</Button>{' '}
                </Col>
                <Col>
                    <Button variant="dark" size="lg" href="https://www.sporcle.com/games/Freddie/goalpremclub">Premier League Top Scorers</Button>{' '} 
                </Col>
            </Row>
        </Container>
     );
}
 
export default Quiz;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './teamphoto.jpeg';
import React from "react";


const Home = () => {
    return (
      <Container>
        <Row>
          <Col className="home">
          <h1 className="title">Follow Canada's journey through the World Cup here!</h1>
          </Col>
          <Col>
          <img src={Image} className="teamPhoto"></img>
          </Col>
          <Col>
          <p className="paragraph">Follow along as Canada has qualified for it's first world cup since 1986! 
          This website was made so that Team Canada fans across the country can keep
          up with all the latest scores and news surrounding the Canadian Soccer Team
          as they make their way through the World Cup in Qatar.
          </p>
          </Col>

          <Col>
            <h4 className="titleMatch">Upcoming Matches</h4>
                <ul className="matchList">
                    <div>
                        <h5 className="game">Canada vs. Belgium</h5>
                    </div>
                    <p className="date">nov 23, 2022</p>

                    <div>
                        <h5 className="game">Canada vs. Croatia</h5>
                    </div>
                    <p className="date">nov 23, 2022</p>

                    <div>
                        <h5 className="game">Canada vs. Morocco</h5>
                    </div>
                    <p className="date">nov 23, 2022</p>
                </ul>
          </Col>

          <Col className="highlights">
          <h4 className="titleMatch">Watch the previous game highlights</h4>
          <div>
          <iframe src="https://www.youtube.com/embed/sCkfsoJ_FII" height={500} width={900} allowfullscreen />
          </div>
          </Col>
        </Row>
      </Container>
    );
}
 
export default Home;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './teamphoto.jpeg';
import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const Carous = () => {
    return ( 
        <Col>
        <h1 className="playersTitle">Our Players</h1>
        <Row>
          <Carousel className="carousel" variant="dark">

            <Carousel.Item className="carouselItem">

              <Card style={{ width: '20rem' }}>
              <Card.Img className="carouselImage" variant="top" src={Image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</Card.Text>

              </Card.Body>
              </Card>

            </Carousel.Item>

            <Carousel.Item>

              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
  
              </Card.Body>
              </Card>

            </Carousel.Item>

            <Carousel.Item>

              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
  
              </Card.Body>
              </Card>

            </Carousel.Item>
          </Carousel>
          <h1 className="playerTitle">Goalkeepers</h1>
          </Row>
          <Row>
          <Carousel className="carousel" variant="dark">

            <Carousel.Item className="carouselItem">

              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.</Card.Text>

              </Card.Body>
              </Card>

            </Carousel.Item>

            <Carousel.Item>

              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
  
              </Card.Body>
              </Card>

            </Carousel.Item>

            <Carousel.Item>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>

</Carousel.Item>
</Carousel>
<h1 className="playerTitle">Defenders</h1>
          </Row>

          <Row>
          <Carousel className="carousel" variant="dark">

<Carousel.Item className="carouselItem">

  <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={Image} />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>

    </Card.Body>
  </Card>

</Carousel.Item>

<Carousel.Item>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  
  </Card.Body>
</Card>

</Carousel.Item>

<Carousel.Item>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>

</Carousel.Item>
</Carousel>
<h1 className="playerTitle">Midfielders</h1>
          </Row>

          <Row>
          <Carousel className="carousel" variant="dark">

<Carousel.Item className="carouselItem">

  <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={Image} />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>

    </Card.Body>
  </Card>

</Carousel.Item>

<Carousel.Item>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  
  </Card.Body>
</Card>

</Carousel.Item>

<Carousel.Item>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>

</Carousel.Item>
</Carousel>
<h1 className="playerTitle">Attackers</h1>
          </Row>
        </Col>
     );
}
 
export default Carous;
import React from 'react';
import Card from 'react-bootstrap/Card';

const SingleCard = ({ id, image, artist }) => {
  return (
    <Card className="" key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{artist}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;

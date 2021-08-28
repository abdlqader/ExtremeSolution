import React from 'react';
import Card from 'react-bootstrap/Card';

const SingleCard = ({ id, image, artist }) => {
  console.log(process.env.PUBLIC_URL + `/assets/gallery/${image}`);
  return (
    <Card className="" key={id}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/assets/gallery/${image}`}
      />
      <Card.Body>
        <Card.Title>{artist}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;

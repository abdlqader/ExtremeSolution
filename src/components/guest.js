import React, { useEffect, useState } from 'react';
import Header from './core/header';
import Container from 'react-bootstrap/Container';
import SingleCard from './core/card';
import CardColumns from 'react-bootstrap/CardColumns';

const Guest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);
  return (
    <div className="bg-light">
      <Header />
      <Container>
        <CardColumns>
          {data.map((character) => (
            <SingleCard
              key={character.id}
              id={character.id}
              artist={character.name}
              image={character.image}
            />
          ))}
        </CardColumns>
      </Container>
    </div>
  );
};

export default Guest;

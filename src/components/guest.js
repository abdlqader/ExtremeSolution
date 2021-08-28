import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './core/header';
import Container from 'react-bootstrap/Container';
import SingleCard from './core/card';
import CardColumns from 'react-bootstrap/CardColumns';
import { fetchArts } from '../actions/artActions';
import { connect } from 'react-redux';

const Guest = ({ arts, token, fetchArts }) => {
  useEffect(() => {
    fetchArts(token);
  }, [fetchArts, token]);
  return (
    <div className="bg-light">
      <Header />
      <Container className="mt-5">
        <CardColumns>
          {arts.map((art) => (
            <SingleCard
              key={art.id}
              id={art.id}
              artist={art.artist}
              image={art.picture}
            />
          ))}
        </CardColumns>
      </Container>
    </div>
  );
};
Guest.prototype = {
  fetchArts: PropTypes.func,
  token: PropTypes.string,
  arts: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => ({
  fetchArts: (authData) => dispatch(fetchArts(authData)),
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  arts: state.arts.arts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Guest);

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './core/header';
import Container from 'react-bootstrap/Container';
import SingleCard from './core/card';
import CardColumns from 'react-bootstrap/CardColumns';
import { fetchArts } from '../actions/artActions';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

const Guest = ({ arts, token, fetchArts }) => {
  const [pages, setPage] = useState(0);
  useEffect(() => {
    fetchArts(token);
  }, [fetchArts, token]);
  const pageChange = ({ selected }) => {
    fetchArts({ token, filter: selected });
  };
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

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          initialPage={pages}
          onPageChange={(e) => pageChange(e)}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName={'paginate-li'}
          previousClassName={'paginate-li'}
          nextClassName={'paginate-li'}
        />
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

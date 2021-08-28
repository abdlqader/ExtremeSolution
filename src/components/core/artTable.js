import Button from 'react-bootstrap/Button';
import React, { Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArt } from '../../actions/artActions';

const ArtTable = ({ arts, token, deleteArt }) => {
  const removeArt = (id) => {
    deleteArt({ token, id });
  };
  return (
    <Fragment>
      <thead className="bg-light">
        <tr>
          <th>Item</th>
          <th>Artist</th>
          <th>description</th>
          <th>Creation Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {arts.map((art) => (
          <tr key={art.id}>
            <td>{art.picture}</td>
            <td>{art.artist}</td>
            <td>{art.description}</td>
            <td>{moment(art.creationDate).format('MMMM Do YYYY, h:mm a')}</td>
            <td>
              <Button variant="danger" onClick={() => removeArt(art.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
};
ArtTable.prototype = {
  arts: PropTypes.array.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  deleteArt: (authData) => dispatch(deleteArt(authData)),
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
});
export default connect(mapStateToProps, mapDispatchToProps)(ArtTable);

import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './core/header';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import SideBar from './core/sidebar';
import ArtTable from './core/artTable';
import UserTable from './core/userTable';
import { connect } from 'react-redux';
import { fetchArts } from '../actions/artActions';
import { fetchUsers } from '../actions/adminActions';

const Admin = ({ arts, users, fetchUsers, fetchArts, token }) => {
  const [isArts, setView] = useState(true);
  useEffect(() => {
    fetchArts(token);
    fetchUsers(token);
  }, [fetchArts, token, fetchUsers]);

  return (
    <Fragment>
      <Header />
      <SideBar changeView={(value) => setView(value)} />
      <Container className="mt-5 mr-5">
        {isArts && (
          <Table borderless>
            <ArtTable arts={arts} />
          </Table>
        )}
        {!isArts && (
          <Table borderless>
            <UserTable users={users} />
          </Table>
        )}
      </Container>
    </Fragment>
  );
};
Admin.propTypes = {
  arts: PropTypes.array,
  users: PropTypes.array,
  token: PropTypes.string,
  fetchArts: PropTypes.func,
  fetchUsers: PropTypes.func,
};
const mapDispatchToProps = (dispatch) => ({
  fetchArts: (authData) => dispatch(fetchArts(authData)),
  fetchUsers: (authData) => dispatch(fetchUsers(authData)),
});
const mapStateToProps = (state) => ({
  arts: state.arts.arts,
  users: state.admin.users,
  token: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

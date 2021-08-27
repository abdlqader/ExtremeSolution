import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './core/header';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import SideBar from './core/sidebar';
import ArtTable from './core/artTable';
import UserTable from './core/userTable';
import { connect } from 'react-redux';

const Admin = ({ arts, users }) => {
  const [isArts, setView] = useState(true);
  return (
    <Fragment>
      <Header />
      <SideBar changeView={(value) => setView(value)} />
      <Container className="mt-5 mr-5">
        {isArts && (
          <Table borderless>
            <ArtTable />
          </Table>
        )}
        {!isArts && (
          <Table borderless>
            <UserTable />
          </Table>
        )}
      </Container>
    </Fragment>
  );
};
Admin.propTypes = {
  arts: PropTypes.array.isRequired,
  users: PropTypes.array,
};
const mapStateToProps = (state) => ({
  arts: state.arts.arts,
  users: state.admin.users,
});

export default connect(mapStateToProps)(Admin);

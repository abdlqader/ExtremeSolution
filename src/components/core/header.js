import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

const Header = ({ username, role }) => {
  return (
    <Navbar className="shadow-sm p-0 bg-white rounded">
      <Container>
        <Navbar.Brand>Louvre</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p className="mb-0 font-weight-bold">{username}</p>
            <footer className="small">{role}</footer>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
  role: state.auth.role,
});
export default connect(mapStateToProps)(Header);

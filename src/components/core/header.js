import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

const Header = ({ name, role }) => {
  return (
    <Navbar className="shadow-sm p-0 mb-5 bg-white rounded">
      <Container>
        <Navbar.Brand>Louvre</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p className="mb-0 font-weight-bold">{name}</p>
            <footer className="small">{role}</footer>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  name: state.auth.name,
  role: state.auth.role,
});
export default connect(mapStateToProps)(Header);

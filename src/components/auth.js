import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { authLogin } from '../actions/authActions';
import { withRouter } from 'react-router-dom';

const Auth = ({ authLogin, history, role }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const submit = (e) => {
    e.preventDefault();
    authLogin({ username, password, history });
  };
  return (
    <div className="bg">
      <Container className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h2 className="active"> Log In </h2>
          </div>
          <Form className="">
            <Form.Control
              type="text"
              id="username"
              className="fadeIn second"
              name="username"
              placeholder="username"
              onChange={(value) => setUsername(value.target.value)}
              value={username}
            />
            <Form.Control
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              onChange={(value) => setPassword(value.target.value)}
              value={password}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={(e) => submit(e)}
            />
          </Form>
        </div>
      </Container>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  authLogin: (authData) => dispatch(authLogin(authData)),
});
const mapStateToProps = (state) => ({
  role: state.auth.role,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));

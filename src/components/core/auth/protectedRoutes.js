import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ADMIN_TYPE, GUEST_TYPE } from '../../../services/types';

function ProtectedRoute({
  component: Component,
  authToken,
  role,
  ...restOfProps
}) {
  let redirect_url = '/login';
  let roleMatched = false;
  switch (role) {
    case GUEST_TYPE:
      redirect_url = '/';
      roleMatched = true;
      break;
    case ADMIN_TYPE:
      redirect_url = '/admin';
      roleMatched = true;
      break;
    default:
      redirect_url = '/login';
      roleMatched = false;
      break;
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        authToken && roleMatched ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirect_url} />
        )
      }
    />
  );
}

const mapStateToProps = (state) => ({
  authToken: state.auth.token,
  role: state.auth.role,
});

export default connect(mapStateToProps)(ProtectedRoute);

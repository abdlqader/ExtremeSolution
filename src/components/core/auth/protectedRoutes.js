import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { check } from '../../../services/authHelper';

function ProtectedRoute({
  component: Component,
  authToken,
  role,
  routeLink,
  ...restOfProps
}) {
  let { redirect_url, roleMatched } = check(role, routeLink);

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

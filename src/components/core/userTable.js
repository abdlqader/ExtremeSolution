import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
const UserTable = ({ users }) => {
  return (
    <Fragment>
      <thead className="bg-light">
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <td>{moment(user.creationDate).format('MMMM Do YYYY, h:mm a')}</td>
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
};
UserTable.prototype = {
  users: PropTypes.array.isRequired,
};
export default UserTable;

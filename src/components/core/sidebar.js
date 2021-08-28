import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const SideBar = ({ changeView }) => {
  return (
    <div className="sidebar shadow-sm p-0 bg-white rounded">
      <Button
        className="active"
        variant="outline-light"
        onClick={() => changeView(true)}
      >
        <img src={'assets/nav/art/supervised_user_circle.png'} alt="Arts" />
      </Button>
      <Button onClick={() => changeView(false)} variant="outline-light">
        <img src={'/assets/nav/users/user@1x.svg'} alt="Users" />
      </Button>
    </div>
  );
};
SideBar.prototype = {
  changeView: PropTypes.func.isRequired,
};

export default SideBar;

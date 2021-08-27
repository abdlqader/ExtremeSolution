import { ADMIN_TYPE, GUEST_TYPE } from './types';
export const check = (role, routeLink) => {
  let redirect_url = '/login';
  let roleMatched = false;
  switch (role) {
    case GUEST_TYPE:
      redirect_url = `/`;
      roleMatched = routeLink === 'guest';
      break;
    case ADMIN_TYPE:
      redirect_url = '/admin';
      roleMatched = routeLink === 'admin';
      break;
    default:
      redirect_url = '/login';
      roleMatched = false;
      break;
  }
  return { redirect_url, roleMatched };
};

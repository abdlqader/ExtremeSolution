var jwt = require('jsonwebtoken');
export class JWT {
  expireIn: number = 60 * 60; //hour
  public issue = (payload: info): string => {
    return jwt.sign(payload.payload, process.env.JWT_SECRET, {
      expiresIn: this.expireIn,
    });
  };
  public decode = (token: string): info => {
    return jwt.decode(token, { complete: true });
  };
}
export interface info {
  payload: { id: number; role: string; iat?: string; exp?: string };
}

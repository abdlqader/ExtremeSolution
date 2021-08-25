import User from '../models/User.model';
import { JWT } from '../services/jwtService';

export async function IsAuthorized(req: any, res: any, next: Function) {
  let jwt = new JWT();
  let token: string;
  let credentials: string | undefined;
  try{
  if (req.headers && req.headers.authorization) {
    credentials = req.headers.authorization;

    token = credentials as string;
    let decode = jwt.decode(token);

    req.user = decode.payload;
    let user_id = req.user.id;
    let user = await User.findOne({
      where: {
        id: user_id,
      },
    });
    if (!user)
      return res
        .status(400)
        .json({ message: ' there is no user with this id' });
    req.user = user;
    next();
  }} catch {
    return res.status(400).json({ message: 'Token is not defined' });
  }
}

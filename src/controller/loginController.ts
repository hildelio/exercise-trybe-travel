import { Request, Response } from 'express';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { type, message, data } = await loginService.login(req.body);
  if (type > 300) {
    return res.status(type).send({ message });
  }
  return res.status(type).send(data);
};

export default {
  login,
};
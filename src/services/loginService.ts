import UserModel from '../database/models/User.model';
import { Login } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';
import { tokenGenerator } from '../utils/tokenJWT';

const login = async ({ email, password }: Login):
Promise<ServiceResponse<Login>> => {
  const response = await UserModel.findOne(
    { where: { email } },
  );
  if (!response) {
    return { type: 404, message: 'User not found', data: null };
  }
  if (password !== response.dataValues.password) {
    return { type: 404, message: 'Wrong username or password', data: null };
  }
  const token = tokenGenerator({ id: response.dataValues.id });
  return { type: 200, message: 'User found', data: token };
};

export default {
  login,
};
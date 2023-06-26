import { DataTypes, ModelDefined } from 'sequelize';
import { User } from '../../types/User';
import db from '.';

const UserModel: ModelDefined<User, User> = db.define('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  tableName: 'users',
  underscored: true,
  timestamps: false,
});

export default UserModel;
import { DataTypes, ModelDefined } from 'sequelize';
import { Package } from '../../types/Package';
import db from '.';

const PackageModel : ModelDefined<Package, Package> = db.define('packages', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  destination: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
}, {
  tableName: 'packages',
  underscored: true,
  timestamps: false,
});

export default PackageModel;
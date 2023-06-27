import { Package } from '../types/Package';
import PackageModel from '../database/models/Package.model';
import { ServiceResponse } from '../types/ServiceResponse';

const updatePackageById = async ({ id, destination, category, price }: Package):
Promise<ServiceResponse<Package>> => {
  const response = await PackageModel.findOne({ where: { id } });
  if (!response) {
    return { type: 404, message: 'Pacote não encontrado!', data: null };
  }

  await PackageModel.update({
    destination,
    category,
    price,
  }, {
    where: { id },
  });
  await response.reload();
  return { type: 200, message: 'Package updated', data: response.dataValues };
};

const deletePackageById = async (id : number): Promise<ServiceResponse<Package>> => {
  const response = await PackageModel.findOne({ where: { id } });
  if (!response) {
    return { type: 404, message: 'Pacote não encontrado!', data: null };
  }
  await PackageModel.destroy({ where: { id } });
  return { type: 204, message: 'Package deleted', data: null };
};

export default { 
  updatePackageById,
  deletePackageById,
};
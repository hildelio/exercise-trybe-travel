import { Request, Response } from 'express';
import packageService from '../services/packageService';

const updatePackageById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { destination, category, price } = req.body;

  const { type, message, data } = await packageService.updatePackageById(
    { id: +id, destination, category, price },
  );
  if (type > 300) {
    return res.status(type).send({ message });
  } 
  return res.status(type).send(data);
};

export default {
  updatePackageById,
};
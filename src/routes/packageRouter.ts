import { Router } from 'express';
import packageController from '../controller/packageController';

const packageRouter = Router();

packageRouter.patch('/:id', packageController.updatePackageById);

export default packageRouter;  
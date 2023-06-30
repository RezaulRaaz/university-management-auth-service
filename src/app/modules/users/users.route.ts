import express from 'express';
import { UserController } from './users.controller';
import validateRequest from '../../middlewars/validateRequest';
import { UserValidation } from './users.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

export const UserRoutes = router;

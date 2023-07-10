import express from 'express';
import { UserController } from './users.controller';
import validateRequest from '../../middlewars/validateRequest';
import { UserValidation } from './users.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(UserValidation.createStudentZodSchema),
  UserController.createStudent
);

export const UserRoutes = router;

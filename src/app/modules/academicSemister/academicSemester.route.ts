import express from 'express';
import { AcademicSemesterValidation } from './academicSemesterValidation';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewars/validateRequest';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

export const AcademicSemesterRoutes = router;

import express from 'express';

import validateRequest from '../../middlewars/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFacultyValidation';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyZodSchema),
  AcademicFacultyController.createAcademicFaculty
);

router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
  AcademicFacultyController.updateAcademicFaculty
);
router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.delete('/:id', AcademicFacultyController.deleteAcademicFaculty);

export const AcademicFacultyRoutes = router;

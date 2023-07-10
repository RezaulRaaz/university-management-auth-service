import express from 'express';
import { StudentController } from './student.controller';
import { StudentValidaion } from './student.validation';
import validateRequest from '../../middlewars/validateRequest';
const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent
);
router.get('/', StudentController.getAllStudents);

export const StudentRoutes = router;

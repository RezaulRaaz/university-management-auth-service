import { NextFunction, RequestHandler, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
const createSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...AcademicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      AcademicSemesterData
    );
    next();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createSemester,
};

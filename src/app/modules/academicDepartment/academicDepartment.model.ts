import { Schema, model } from 'mongoose';
import { IAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchema = new Schema<IAcademicDepartment>(
  {
    title: {
      type: String,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const AcademicDepartment = model<IAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema
);

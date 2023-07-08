import { Model } from 'mongoose';

export type IAcademicFaculty = {
  title: string;
};

export type AcademicSemesterModel = Model<IAcademicFaculty>;

export type IAcademicFacultyFilters = {
  searchTerm?: string;
};

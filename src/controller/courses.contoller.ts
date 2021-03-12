import { Rating } from './../entity/Rating';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Course } from '../entity/Course';

export const addNewCourse = async (req: Request, res: Response, next: NextFunction) => {
  const courseRepo = getRepository(Course);

  const { name, department, required } = req.body;

  const newCourse = new Course();

  newCourse.name = name;
  newCourse.department = department;
  newCourse.required = required;

  await courseRepo.save(newCourse);

  res.json(newCourse);
};

export const getAllCourses = async (req: Request, res: Response, next: NextFunction) => {
  const courseRepo = getRepository(Course);
  const ratingRepo = getRepository(Rating);

  const allCourses = await courseRepo.find();

  const ratingsPromises = allCourses.map((course) => {
    return ratingRepo.find({
      course,
    });
  });

  const ratings = await Promise.all(ratingsPromises);
  ratings.map((ratings, i) => {
    allCourses[i].ratings = ratings
  })
  
  res.json(allCourses);
};

export const getOneCourse = async (req: Request, res: Response, next: NextFunction) => {
  const courseRepo = getRepository(Course);
  const course = await courseRepo.findOne(req.params.courseid);

  const ratingRepo = getRepository(Rating);

  const ratings = await ratingRepo.find({
    course,
  });

  course.ratings = ratings;
  res.json(course);
};

import { Course } from './../entity/Course';
import { Rating } from './../entity/Rating';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

export const addNewRating = async (req: Request, res: Response, next: NextFunction) => {
  const ratingRepo = getRepository(Rating);
  const courseRepo = getRepository(Course);

  const { rating, difficulty, takeAgain, professor, courseID } = req.body;

  const newRating = new Rating();

  newRating.rating = rating;
  newRating.difficulty = difficulty;
  newRating.takeAgain = takeAgain;
  newRating.professor = professor;

  const existingCourse = await courseRepo.findOne(courseID);

  if (!existingCourse) {
    res.status(422);
    next();
  } else {
    newRating.course = existingCourse;

    await ratingRepo.save(newRating);

    res.json(newRating);
  }
};

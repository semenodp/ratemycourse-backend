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
  newRating.upvotes = 0;

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

export const upvoteRating = async (req: Request, res: Response, next: NextFunction) => {
  const ratingRepo = getRepository(Rating);
  const rating = await ratingRepo.findOne(req.params.ratingid);

  if (rating.upvotes) {
    rating.upvotes = rating.upvotes + 1; 
  } else {
    rating.upvotes = 1;
  }
  
  await ratingRepo.save(rating);

  res.json(rating);
};

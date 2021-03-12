import { NextFunction, Request, Response } from 'express';

export function errorHandler(error: any, _: Request, response: Response, next: NextFunction): void {
  const statusCode = response.statusCode !== 200 ? response.statusCode : 500;
  response.status(statusCode);
  if (statusCode === 500) {
    response.json({
      error: 'Internal Server Error. Try again later or contact us.',
    });
  } else {
    response.json({
      error: error.message,
    });
  }
}

export const validateRequest = (resourceSchema) => async (req, res, next) => {
  const resource = req.body;
  try {
    await resourceSchema.validate(resource);
    next();
  } catch (e) {
    res.status(422);
    next(e);
  }
};

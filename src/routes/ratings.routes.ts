import { validateRequest } from './../utils';
import * as express from 'express';

import { addNewRating } from '../controller/ratings.controller';
import ratingSchema from '../schema/ratings.schema';

const router = express.Router();

router.post('/', validateRequest(ratingSchema), addNewRating);

export default router;

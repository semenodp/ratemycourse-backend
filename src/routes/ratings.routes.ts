import { validateRequest } from './../utils';
import * as express from 'express';

import { addNewRating, upvoteRating } from '../controller/ratings.controller';
import ratingSchema from '../schema/ratings.schema';

const router = express.Router();

router.post('/', validateRequest(ratingSchema), addNewRating);

router.patch('/:ratingid/upvote', upvoteRating);

export default router;

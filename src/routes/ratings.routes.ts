import * as express from 'express';

import { addNewRating } from '../controller/ratings.controller';

const router = express.Router();

router.post('/', addNewRating);

export default router;

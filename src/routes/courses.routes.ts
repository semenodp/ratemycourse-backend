import * as express from 'express';

import { addNewCourse, getAllCourses, getOneCourse } from '../controller/courses.contoller';

const router = express.Router();

router.post('/', addNewCourse);

router.get('/', getAllCourses);

router.get('/:courseid', getOneCourse);

export default router;

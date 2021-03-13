import { validateRequest } from './../utils';
import * as express from 'express';

import { addNewCourse, getAllCourses, getOneCourse } from '../controller/courses.contoller';
import courseSchema from '../schema/courses.schema';

const router = express.Router();

router.post('/', validateRequest(courseSchema), addNewCourse);

router.get('/', getAllCourses);

router.get('/:courseid', getOneCourse);

export default router;

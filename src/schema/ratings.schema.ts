import * as yup from 'yup';

const ratingSchema = yup.object({
  rating: yup.number().positive().required(),
  difficulty: yup.number().positive().required(),
  professor: yup.string().required(),
  takeAgain: yup.boolean().required(),
});

export default ratingSchema;
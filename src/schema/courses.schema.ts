import * as yup from 'yup';

const courseSchema = yup.object({
  name: yup.string().required(),
  department: yup.string().required(),
  required: yup.boolean().required(),
});

export default courseSchema;
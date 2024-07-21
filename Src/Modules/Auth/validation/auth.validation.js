import Joi from "joi";
import { Role } from "../../../../utils/enums.js";

export const signupSchema = Joi.object({
  body: {
    userName: Joi.string().min(3).max(5).trim().required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
    phoneNumber: Joi.string().max(15).trim().required(),
    role: Joi.string().valid(Role.ADMIN, Role.USER),
  },
  params: {},
  query: {},
});

export const signinSchema = Joi.object({
  body: {
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
  },
  params: {},
  query: {},
});

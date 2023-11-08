import Joi from "joi";

export const translateValidation = Joi.string().max(500).required();
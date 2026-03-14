import Joi from "joi";
import { CreateQuestionRequest } from "@/restAPI/domains/gemini/createQuetion";

const validate = (data: CreateQuestionRequest) => {
    const schema = Joi.object<CreateQuestionRequest>({
        subject: Joi.string().max(100).required(),
        piece: Joi.number().integer().min(1).max(5).required(),
        type: Joi.string().valid("easy", "normal", "hard").required()
    });

    return schema.validate(data);
};

export default validate;

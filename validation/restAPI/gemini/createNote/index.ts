import Joi from "joi";
import { CreateNoteRequest } from "@/restAPI/domains/gemini/createNote";

const validate = (data: CreateNoteRequest) => {
    const schema = Joi.object<CreateNoteRequest>({
        subject: Joi.string().max(100).required(),
        type: Joi.string().valid("short", "middle", "long").required()
    });

    return schema.validate(data);
};

export default validate;

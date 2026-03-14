import Joi from "joi";
import { CompleteNoteRequest } from "@/restAPI/domains/gemini/completeNote";

const validate = (data: CompleteNoteRequest) => {
    const schema = Joi.object<CompleteNoteRequest>({
        note: Joi.string().max(5000).required(),
        type: Joi.string().valid("short", "middle", "long")
    });

    return schema.validate(data);
};

export default validate;

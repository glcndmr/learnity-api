import Joi from "joi";
import { SendPromptRequest } from "@/restAPI/domains/gemini/sendPrompt";

const validate = (data: SendPromptRequest) => {
    const schema = Joi.object<SendPromptRequest>({
        prompt: Joi.string().max(2000).required()
    });

    return schema.validate(data);
};

export default validate;

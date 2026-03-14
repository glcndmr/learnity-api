import generateText from "@/services/gemini/generateText";
import { EndpointReturn } from "@/types/endpointReturn";
import { Request, Response } from "express";

export interface SendPromptRequest {
    prompt: string;
}

const sendPrompt = async (
    req: Request<{}, any, SendPromptRequest>,
    res: Response
): Promise<EndpointReturn> => {

    const prompt = req.body.prompt;

    const text = await generateText(prompt);

    return {
        statusCode: 200,
        data: {
            text
        }
    }
}

export default sendPrompt;

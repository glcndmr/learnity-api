import { Note } from "@/models";
import generateText from "@/services/gemini/generateText";
import getSubject from "@/services/gemini/getSubject";
import logger from "@/services/logger";
import { EndpointReturn } from "@/types/endpointReturn";
import { Request, Response } from "express";

export interface CreateNoteRequest {
    subject: string;
    type: string; // long, middle, short
}

interface CreateNoteResponse {
    message: string;
}

const createNote = async (
    req: Request<{}, any, CreateNoteRequest>,
    res: Response<CreateNoteResponse>
): Promise<EndpointReturn<CreateNoteResponse>> => {

    const userData = req.user;
    const subject = req.body.subject;
    const type = req.body.type;

    const prompt = `'${subject}' konusu hakkında, '${type}' uzunluğuna sahip bir not hazırla.`;

    const responseText = await generateText(prompt);

    if (responseText) {
        try {
            await Note.create({
                userId: userData.id,
                note: responseText
            });
        } catch (error) {
            logger.error("Not veritabanına kaydedilemedi!", 3);
        }
    }

    return {
        statusCode: 200,
        data: {
            message: responseText
        }
    }
}

export default createNote;

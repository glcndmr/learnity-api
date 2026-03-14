import { Note } from "@/models";
import generateText from "@/services/gemini/generateText";
import logger from "@/services/logger";
import { EndpointReturn } from "@/types/endpointReturn";
import { Request, Response } from "express";

export interface CompleteNoteRequest {
    note: string;
    type: string; // long, middle, short
}

interface CompleteNoteResponse {
    message: string;
}

const completeNote = async (
    req: Request<{}, any, CompleteNoteRequest>,
    res: Response<CompleteNoteResponse>
): Promise<EndpointReturn<CompleteNoteResponse>> => {

    const userData = req.user;
    const note = req.body.note;
    const type = req.body.type;

    const prompt = `Şu notu daha biraz daha uzatmanı istiyorum. Not: '${note}'.`;

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

export default completeNote;

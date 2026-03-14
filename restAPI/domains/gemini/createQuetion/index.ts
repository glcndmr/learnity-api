import generateText from "@/services/gemini/generateText";
import { EndpointReturn } from "@/types/endpointReturn";
import { Request, Response } from "express";

export interface CreateQuestionRequest {
    subject: string;
    piece: string; // oluşturulacak soru adedi
    type: string; // soru zorluğu
}

interface CreateQuestionResponse {
    message: string;
}

const createQuestion = async (
    req: Request<{}, any, CreateQuestionRequest>,
    res: Response<CreateQuestionResponse>
): Promise<EndpointReturn<CreateQuestionResponse>> => {

    const subject = req.body.subject;
    const piece = req.body.piece;
    const type = req.body.type;

    const prompt = `'${subject}' konusu hakkında, '${piece}' adet soru hazırla. Soruyu çoktan seçmeli hazırla, 5 şık olsun. Zorluk derecesi ise şu şekilde: ${type}. Her sorudan sonra, tüm sorular için 'Doğru cevaplar sırasıyla a, b, c...' şeklinde cevap anahtarını da ekle.`;

    const responseText = await generateText(prompt);

    return {
        statusCode: 200,
        data: {
            message: responseText
        }
    }
}

export default createQuestion;

import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "@/config";
import logger from "@/services/logger";

const genAI = new GoogleGenerativeAI(config.gemini.apiKey);

const generateText = async (prompt: string) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        
        return text;

    } catch (error) {
        const message = `Gemini API error: ${ error instanceof Error ? error.message : error}`;
        logger.error(message, 91);
        throw new Error(message);
    }
}

export default generateText;

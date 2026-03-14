import generateText from "../generateText";

const getSubject = async (text: string, subjects?: string[]): Promise<string> => {
    let prompt: string;

    if (subjects && subjects.length > 0) {
        prompt = `Sana verdiğim notun konusunu belirle. Ayrıca sana konuları da gönderdim. Eğer bu konulardan birisi notun konusuyla uyuşuyorsa, uyuşam konunun adını ver. Eğer herhangi birisi ile uyuşmuyorsa kendin konu başlığı belirle ve onu bana ilet.
            Bana cevap olarak sadece notun başlığını ver.
            Not: '${text}'
            Konular: ${subjects.join(", ")}.`;

    } else {
        prompt = `Sana verdiğim notun konusunu belirle.
            Bana cevap olarak sadece notun başlığını ver.
            Not: '${text}'.`;
    }

    const responseText = await generateText(prompt);

    return responseText;
}

export default getSubject;

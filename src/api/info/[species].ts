import { OpenAI } from 'openai';

export default async function handler(req, res) {
    const openai = new OpenAI({
        apiKey: process.env.GATSBY_OPENAI_API_KEY,
    });
    
    const species = req.params.species
    
    const prompt = `I am considering ordering ${species} for dinner, but I am not sure if it is sustainable. Can you provide me with some information about the sustainability of ${species}? What are some questions I should ask the restaurant about the source of the ${species} and how will I recognize sustainable versus non-sustainable responses? 

    Give your response as json in the following format: { "sustainable": true, "reason": "[reason]", "questions": [{question: "Where was the fish caught?", sustainableAnswers: [sustainable locations], nonsustainableAnswers: ["I don't know", nonsustainable locations]}, {question: "What fishing method was used?", sustainableAnswers: [sustainable methods], nonsustainableAnswers: [nonsustainable methods]}, {question: "Is the fish certified by a sustainable seafood certification program?", sustainableAnswers: ["yes"], nonsustainableAnswers: ["I don't know","No."]}`;
    
    
    try {
        const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [
            {
            role: "user",
            content: [
                { type: "text", text: prompt },
            ],
            },
        ],
        "max_tokens": 500
        });
        res.status(200).json({message: response.choices[0].message.content});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: JSON.stringify(error) });
    } 
}
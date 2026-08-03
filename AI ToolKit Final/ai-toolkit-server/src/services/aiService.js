import { getGeminiClient, geminiModel } from "../config/geminiClient.js";

export const generateContent = async (prompt) => {
  if (!prompt || typeof prompt !== "string") {
    throw new Error("A valid prompt is required before calling Gemini.");
  }

  const ai = getGeminiClient();

  const response = await ai.models.generateContent({
    model: geminiModel,
    contents: prompt,
  });

  const output = response.text?.trim();

  if (!output) {
    throw new Error("Gemini returned an empty response.");
  }

  return output;
};

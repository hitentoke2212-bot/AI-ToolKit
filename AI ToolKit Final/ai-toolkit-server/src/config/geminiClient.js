import { GoogleGenAI } from "@google/genai";

const DEFAULT_MODEL = "gemini-3.6-flash";

let cachedClient;

export const getGeminiClient = () => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing. Add it to ai-toolkit-server/.env before calling AI endpoints.");
  }

  if (!cachedClient) {
    cachedClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  return cachedClient;
};

export const geminiModel = process.env.GEMINI_MODEL || DEFAULT_MODEL;

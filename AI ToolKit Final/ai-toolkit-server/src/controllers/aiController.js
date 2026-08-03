import { getEmailPrompt } from "../prompts/emailPrompt.js";
import { getExplainPrompt } from "../prompts/explainPrompt.js";
import { getImprovePrompt } from "../prompts/improvePrompt.js";
import { getQuestionPrompt } from "../prompts/questionPrompt.js";
import { getSummaryPrompt } from "../prompts/summarizePrompt.js";
import { generateContent } from "../services/aiService.js";

const taskConfig = {
  summarize: {
    inputKey: "text",
    outputKey: "summary",
    label: "Text",
    buildPrompt: getSummaryPrompt,
  },
  explain: {
    inputKey: "code",
    outputKey: "explanation",
    label: "Code",
    buildPrompt: getExplainPrompt,
  },
  improve: {
    inputKey: "draft",
    outputKey: "improvedText",
    label: "Draft",
    buildPrompt: getImprovePrompt,
  },
  email: {
    inputKey: "brief",
    outputKey: "email",
    label: "Email brief",
    buildPrompt: getEmailPrompt,
  },
  questions: {
    inputKey: "topic",
    outputKey: "questions",
    label: "Topic",
    buildPrompt: getQuestionPrompt,
  },
};

const createAiHandler = (taskName) => async (request, response) => {
  try {
    const task = taskConfig[taskName];
    const userInput = request.body?.[task.inputKey];

    if (!userInput || typeof userInput !== "string" || userInput.trim().length === 0) {
      return response.status(400).json({
        success: false,
        message: `${task.label} is required.`,
      });
    }

    const prompt = task.buildPrompt(userInput.trim());
    const result = await generateContent(prompt);

    return response.status(200).json({
      success: true,
      [task.outputKey]: result,
    });
  } catch (error) {
    console.error(`[${taskName}]`, error.message);

    return response.status(500).json({
      success: false,
      message: "Failed to generate AI response. Check the API key, model name, and network connection.",
    });
  }
};

export const summarizeText = createAiHandler("summarize");
export const explainCode = createAiHandler("explain");
export const improveWriting = createAiHandler("improve");
export const generateEmail = createAiHandler("email");
export const generateQuestions = createAiHandler("questions");

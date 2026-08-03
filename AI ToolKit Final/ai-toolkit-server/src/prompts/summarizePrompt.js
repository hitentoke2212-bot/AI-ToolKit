export const getSummaryPrompt = (text) => `
You are an expert study assistant.

Summarize the following content in clear, simple language.
Return 4 to 6 bullet points and keep each point concise.

Content:
${text}
`;

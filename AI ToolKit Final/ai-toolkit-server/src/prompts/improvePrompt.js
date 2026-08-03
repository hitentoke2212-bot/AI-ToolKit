export const getImprovePrompt = (draft) => `
You are a professional writing assistant.

Improve the following text for clarity, grammar, tone, and flow.
Keep the meaning the same and return only the improved version.

Draft:
${draft}
`;

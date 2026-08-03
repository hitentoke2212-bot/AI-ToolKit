export const getExplainPrompt = (code) => `
You are a senior Node.js instructor.

Explain the following code for a beginner.
Include:
1. What the code does
2. How the main parts work
3. Any important improvements or risks

Code:
${code}
`;

export const getQuestionPrompt = (topic) => `
You are an interview preparation coach.

Generate 10 interview questions for the following role, skill, or topic.
Group the questions into beginner, intermediate, and advanced levels.

Topic:
${topic}
`;

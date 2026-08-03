import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const runAiWorkflow = async (tool, input) => {
  const response = await api.post(tool.endpoint, {
    [tool.inputKey]: input,
  });

  return response.data?.[tool.outputKey] || "No output returned from the server.";
};

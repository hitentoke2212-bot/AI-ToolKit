import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

const getStatus = (_request, response) => response.status(200).json({
  success: true,
  message: "AI Toolkit Backend Running",
});

app.get("/", getStatus);
app.get("/health", getStatus);
app.use("/api/ai", aiRoutes);

app.use((request, response) => response.status(404).json({
  success: false,
  message: `Route not found: ${request.method} ${request.originalUrl}`,
}));

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(error.statusCode || 500).json({
    success: false,
    message: "An unexpected server error occurred.",
  });
});

app.listen(port, () => {
  console.log(`AI Toolkit server running on http://localhost:${port}`);
});

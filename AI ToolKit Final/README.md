# AI Toolkit

A working React + Express project for Module 12: AI API Integrations. The app demonstrates the complete flow taught in the PPT: React UI → Express route → controller → prompt template → Gemini service → response shown in the frontend.

## What is implemented

- Google Gemini SDK connection through `@google/genai`
- Environment-based API key configuration
- Reusable AI service layer
- Five prompt templates
- Five backend AI endpoints
- React API service using Axios
- Live Generate button and output/error/loading states

## Project structure

```txt
ai-toolkit-client/    React + Vite frontend
ai-toolkit-server/    Express + Gemini backend
```

## Backend setup

```bash
cd ai-toolkit-server
npm install
npm run dev
```

Create `ai-toolkit-server/.env` if it is missing:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your-api-key-here
GEMINI_MODEL=gemini-3.6-flash
```

The backend runs at `http://localhost:5000`.

## Frontend setup

```bash
cd ai-toolkit-client
npm install
npm run dev
```

The frontend runs at the Vite URL shown in the terminal, usually `http://localhost:5173`.

## API endpoints

| Method | Endpoint | Body key | Response key |
| --- | --- | --- | --- |
| POST | `/api/ai/summarize` | `text` | `summary` |
| POST | `/api/ai/explain` | `code` | `explanation` |
| POST | `/api/ai/improve` | `draft` | `improvedText` |
| POST | `/api/ai/email` | `brief` | `email` |
| POST | `/api/ai/questions` | `topic` | `questions` |

## Teaching integrity notes

The implementation is intentionally simple and matches the PPT architecture. It does not add authentication, database storage, streaming, file upload, or unnecessary backend layers.

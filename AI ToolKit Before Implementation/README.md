# AI Toolkit

A production-quality starter repository for an instructor-led Node.js course on AI API Integrations. It provides a polished React dashboard and an enterprise-style Express API foundation, while intentionally stopping before any AI provider is connected.

> **Course boundary:** No AI SDK, provider calls, database, authentication, streaming, or generated mock content is included.

## Project structure

```
ai-toolkit-client/    React 19 + Vite dashboard
ai-toolkit-server/    Express.js placeholder API
```

### Client

```
src/
├── assets/       Static assets
├── components/   Reusable UI components
├── hooks/        Shared React hooks
├── layout/       Navigation and footer
├── pages/        Dashboard and workflow pages
├── services/     Future API client location
├── styles/       Global application styles
└── utils/        Shared workflow metadata
```

### Server

```
src/
├── config/       Future provider configuration
├── controllers/  Future request controllers
├── middleware/   Shared middleware location
├── prompts/      Empty prompt templates
├── routes/       API route definitions
├── services/     Future AI service layer
└── utils/        Shared server utilities
```

## Installation

Use a recent Node.js LTS release (Node 20 or later is recommended).

```bash
cd ai-toolkit-server
npm install

cd ../ai-toolkit-client
npm install
```

## Run the backend

Copy `.env.example` to `.env` if you want to set a custom port. `GEMINI_API_KEY` is intentionally unused until the course integration module.

```bash
cd ai-toolkit-server
npm run dev
```

The server runs at `http://localhost:5000` by default.

| Endpoint | Description |
| --- | --- |
| `GET /` | API status |
| `GET /health` | Health check |
| `POST /api/ai/summarize` | Integration-ready placeholder |
| `POST /api/ai/explain` | Integration-ready placeholder |
| `POST /api/ai/improve` | Integration-ready placeholder |
| `POST /api/ai/email` | Integration-ready placeholder |
| `POST /api/ai/questions` | Integration-ready placeholder |

Each POST endpoint returns `{ "success": true, "message": "Endpoint ready for AI integration." }`.

## Run the frontend

```bash
cd ai-toolkit-client
npm run dev
```

Open the local Vite URL shown in your terminal. The dashboard includes separate pages for summarizing text, explaining code, improving writing, generating emails, and interview questions. Clicking **Generate** only displays the course-stage notification; it does not call an API.

## Architecture

The frontend is metadata-driven: one shared feature-page layout renders all five tools from a small workflow configuration. The backend has a dedicated route layer and deliberately reserved controller, service, config, middleware, utility, and prompt locations. This keeps the next course module focused on adding AI integration without reorganizing the application.

## Screenshots

_Add course screenshots here after starting the dashboard._

## Upcoming AI integration

In the next course sections, students can add provider configuration, prompt design, validation, service orchestration, and frontend API calls. The provided `GEMINI_API_KEY` example is branding/course preparation only; no Gemini or other AI provider is installed or invoked in this starter.

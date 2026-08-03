# AI Toolkit – Node.js AI API Integration Project

This repository is a beginner-friendly full-stack project designed for teaching Node.js AI API integration using Express, React, and Google Gemini.

It demonstrates the complete flow of an AI-powered application in a simple way:

React UI -> Axios API call -> Express route -> Controller -> Prompt template -> Gemini service -> AI response displayed in the frontend

This project is ideal for PPT-based teaching, classroom demonstrations, and hands-on learning of how AI APIs are connected in a real application.

---

## Why this project exists

The goal of this repository is to make AI API integration easy to understand for students and beginners.

It shows:

- how to create a Node.js backend server
- how to connect to an AI model using an API key
- how to build reusable service and prompt layers
- how to expose backend endpoints for AI features
- how to call those endpoints from a React frontend
- how to display AI-generated output clearly in the UI

---

## What is included

This repository contains two versions of the same teaching project:

1. AI ToolKit Before Implementation
   - Starter version with the application structure and UI layout
   - Useful for showing the project before AI integration is added

2. AI ToolKit Final
   - Fully working version with end-to-end AI integration
   - Includes backend routes, prompt templates, Gemini connection, and frontend AI features

---

## Learning objectives

By studying this project, learners can understand:

- the architecture of a full-stack AI app
- how Node.js and Express handle API requests
- how environment variables are used for secure configuration
- how to call an AI model from a backend service
- how to create prompt-based AI workflows
- how frontend and backend work together in a modern app

---

## Technologies used

### Frontend
- React
- Vite
- React Router
- Axios
- Lucide icons

### Backend
- Node.js
- Express
- CORS
- dotenv
- Morgan

### AI Service
- Google Gemini API via @google/genai

---

## Features in the final version

The completed project includes five AI-powered features:

- Summarize Text
- Explain Code
- Improve Writing
- Generate Email
- Generate Interview Questions

Each feature follows the same flow:

- user enters input in the frontend
- the frontend sends the request to the backend
- the backend builds a prompt
- the AI service sends it to Gemini
- the generated response is returned to the UI

---

## Project structure

```txt
AI ToolKit Before Implementation/
  ai-toolkit-client/
  ai-toolkit-server/

AI ToolKit Final/
  ai-toolkit-client/
  ai-toolkit-server/
```

### Main backend folders
- src/server.js - starts the Express server
- src/routes/ - API routing
- src/controllers/ - request handling
- src/services/ - AI integration logic
- src/prompts/ - prompt templates for each feature
- src/config/ - Gemini client configuration

### Main frontend folders
- src/pages/ - main pages such as dashboard, docs, and feature pages
- src/services/ - API communication with the backend
- src/utils/ - feature metadata and tool definitions
- src/components/ - reusable UI components

---

## How the AI flow works

```txt
User input in React
   -> Axios sends request to Express
   -> Express route receives the request
   -> Controller validates input
   -> Prompt template is built
   -> AI service calls Gemini
   -> Gemini returns generated content
   -> React displays the result
```

This simple architecture is exactly what is often taught in beginner AI integration lessons.

---

## Setup instructions

### 1. Clone the repository

```bash
git clone https://github.com/ayaan07alam/AI-ToolKit.git
cd AI-ToolKit
```

### 2. Set up the backend

```bash
cd "AI ToolKit Final/ai-toolkit-server"
npm install
```

Create a file named .env inside the server folder:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-3.6-flash
```

Start the backend:

```bash
npm run dev
```

The backend will run at:

```txt
http://localhost:5000
```

### 3. Set up the frontend

Open a new terminal and run:

```bash
cd "AI ToolKit Final/ai-toolkit-client"
npm install
npm run dev
```

The frontend will run on the Vite local URL, usually:

```txt
http://localhost:5173
```

---

## Backend API endpoints

The final backend exposes these endpoints:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | /api/ai/summarize | Summarize input text |
| POST | /api/ai/explain | Explain code snippets |
| POST | /api/ai/improve | Improve writing quality |
| POST | /api/ai/email | Generate an email |
| POST | /api/ai/questions | Generate interview questions |

Example request body for summarization:

```json
{
  "text": "Artificial intelligence is changing the way modern applications are built."
}
```

---

## Notes for teaching and learning

This project is intentionally simple and focused on the core concepts of AI integration.

It does not include:

- authentication
- database storage
- user accounts
- file uploads
- streaming chat UI
- complex deployment logic

The focus remains on teaching the important building blocks:

- API key configuration
- backend route setup
- service layer design
- prompt engineering
- frontend API calling
- response handling

---

## Recommended usage for PPT teaching

This repository is a good fit for classroom teaching because it shows a real end-to-end example without overwhelming the learner with extra complexity.

A typical teaching flow would be:

1. Introduce the idea of AI APIs
2. Show the frontend request flow
3. Explain the Express backend architecture
4. Demonstrate prompt construction
5. Show how Gemini responds
6. Display the output in the frontend

---

## Summary

AI Toolkit is a practical teaching project that helps learners understand how a modern AI-powered application is built from the ground up using Node.js and React.

It is simple, educational, and aligned with common PPT explanations of AI API integration.

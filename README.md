# AI Toolkit – Node.js AI API Integration Project

This repository is a beginner-friendly full-stack project designed for teaching Node.js AI API integration using Express, React, and Google Gemini.

It demonstrates the complete flow of an AI-powered application in a simple way:

React UI -> Axios API call -> Express route -> Controller -> Prompt template -> Gemini service -> AI response displayed in the frontend

This project is ideal for PPT-based teaching, classroom demonstrations, and hands-on learning of how AI APIs are connected in a real application.

---

## 🚀 Live Demo

The project is fully deployed and live on Render. You can try all five AI features right now:

**Live Link:** https://ai-toolkit-web.onrender.com

Simply open the link in your browser and start using the AI features. No local setup required to see it in action!

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

## Application Screenshots

### Dashboard – AI Workflows Overview
The main dashboard displays all five AI-powered tools in an organized grid. Each tool card shows the feature name, description, and a link to launch the workflow.

**Features visible:**
- Summarize Text
- Explain Code
- Improve Writing
- Generate Email
- Interview Questions

### Feature Pages – Live AI Generation
Each feature page provides a clean interface for users to input content and generate AI responses. The application shows:

- Input field with placeholder text
- Generate button
- Real-time loading state
- AI-generated output displayed clearly
- Error handling with user-friendly messages
- Success feedback

The interface is responsive and works seamlessly on desktop and mobile devices.

---

## Deployment Information

This project is deployed live on **Render**, a modern cloud platform for hosting full-stack web applications.

### Deployment Architecture

- **Frontend:** Hosted as a static site on Render
- **Backend:** Node.js Express server running on Render
- **API:** Both frontend and backend communicate over HTTPS

### How Deployment Works

When a user visits the live link:

1. React frontend loads from Render's CDN
2. User interacts with the application
3. Frontend makes API calls to the backend (also on Render)
4. Backend receives requests, validates input, and calls Gemini API
5. Gemini processes the prompt and returns generated content
6. Backend sends response back to frontend
7. React displays the result to the user

All communication is encrypted and secure.

### Live Application URL

```
https://ai-toolkit-web.onrender.com
```

You can visit this link anytime to try the application without any local setup.

---

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

### For live demonstrations
You can use the **live deployed version** (https://ai-toolkit-web.onrender.com) during PPT presentations without requiring local setup. Simply open the link and demonstrate each AI feature in real-time.

### For local teaching
Clone the repository and walk through the code step-by-step. Show students:

1. The Express server setup and route configuration
2. How Gemini API key is securely stored in `.env`
3. The prompt template builders in the `prompts/` folder
4. The `aiService.js` that calls Gemini
5. The React components that fetch data from the backend
6. How the AI response is displayed in the frontend

A typical teaching flow would be:

1. Show the live demo of the application in action
2. Explain the architecture (React frontend → Express backend → Gemini API)
3. Walk through the Express route setup
4. Show the Gemini client configuration
5. Demonstrate how prompts are built for each feature
6. Explain the frontend API calls using Axios
7. Show how responses are displayed in the UI
8. Let students run the project locally and experiment

---

## Summary

AI Toolkit is a practical teaching project that helps learners understand how a modern AI-powered application is built from the ground up using Node.js and React.

It is simple, educational, and aligned with common PPT explanations of AI API integration.

**The project is currently deployed and live at:** https://ai-toolkit-web.onrender.com

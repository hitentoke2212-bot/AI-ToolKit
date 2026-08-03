# Run Steps

## Backend

```bash
cd ai-toolkit-server
npm install
npm run dev
```

Expected backend URL:

```txt
http://localhost:5000
```

Health check:

```txt
http://localhost:5000/health
```

## Frontend

```bash
cd ai-toolkit-client
npm install
npm run dev
```

Expected frontend URL:

```txt
http://localhost:5173
```

## Test the complete flow

1. Open the React app.
2. Choose Summarize Text, Explain Code, Improve Writing, Generate Email, or Interview Questions.
3. Enter input.
4. Click Generate.
5. Confirm the Gemini response appears in the output panel.

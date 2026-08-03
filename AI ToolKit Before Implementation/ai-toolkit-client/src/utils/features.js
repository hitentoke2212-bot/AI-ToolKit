import { BriefcaseBusiness, Code2, FileText, Mail, Sparkles } from "lucide-react";

export const featureTools = [
  {
    id: "summarize",
    path: "/summarize",
    title: "Summarize Text",
    description: "Turn long-form content into clear, focused takeaways.",
    prompt: "Paste an article, meeting note, or document to summarize...",
    inputLabel: "Source content",
    icon: FileText,
  },
  {
    id: "explain",
    path: "/explain",
    title: "Explain Code",
    description: "Make unfamiliar code easier to understand and discuss.",
    prompt: "Paste the code you would like to understand...",
    inputLabel: "Code snippet",
    icon: Code2,
  },
  {
    id: "improve",
    path: "/improve",
    title: "Improve Writing",
    description: "Refine tone, clarity, and structure for professional writing.",
    prompt: "Paste your draft to improve...",
    inputLabel: "Writing draft",
    icon: Sparkles,
  },
  {
    id: "email",
    path: "/email",
    title: "Generate Email",
    description: "Create concise, thoughtful emails for everyday work.",
    prompt: "Describe the email you need to write...",
    inputLabel: "Email brief",
    icon: Mail,
  },
  {
    id: "questions",
    path: "/questions",
    title: "Interview Questions",
    description: "Prepare relevant interview questions for any role.",
    prompt: "Enter a role, skill set, or topic...",
    inputLabel: "Role or topic",
    icon: BriefcaseBusiness,
  },
];

import { Router } from "express";
import {
  explainCode,
  generateEmail,
  generateQuestions,
  improveWriting,
  summarizeText,
} from "../controllers/aiController.js";

const router = Router();

router.post("/summarize", summarizeText);
router.post("/explain", explainCode);
router.post("/improve", improveWriting);
router.post("/email", generateEmail);
router.post("/questions", generateQuestions);

export default router;

import express from "express";

import { getInterests, addInterest } from "../controllers/interests.js";

const router = express.Router();

router.get("/", getInterests);
router.post("/add", addInterest);

export default router;

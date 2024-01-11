import { Router } from "express";
import { imageGeneration } from "../controllers/dalle_controller.js";

const dalleRoutes=Router()

dalleRoutes.post('/',imageGeneration)

export default dalleRoutes;
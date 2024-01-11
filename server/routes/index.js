import {Router} from "express";
import dalleRoutes from "./dalleRoutes.js";
import postRoutes from "./postRoutes.js";

const router=Router()

router.use('/post',postRoutes);
router.use('/dalle',dalleRoutes);


export default router;
import {Router} from "express";
import dalleRoutes from "./dalleRoutes.js";
import postRoutes from "./postRoutes.js";

const router=Router()

router.use('/api/v1/post',postRoutes);
router.use('/api/v1/dalle',dalleRoutes);


export default router;
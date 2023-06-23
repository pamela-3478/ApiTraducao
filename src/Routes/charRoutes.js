import { Router } from 'express';
import CharController from '../controllers/CharController.js';


const router = new Router();

router.post("/", CharController.translate);

export default router;

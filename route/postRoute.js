import express from 'express'
import { createPost } from '../controller/post.js';
const router = express.Router();


router.post('/create', createPost)

export default router;
import express from 'express'
import { createPost, fetchAllPost } from '../controller/post.js';
const router = express.Router();


router.post('/create', createPost)
router.get('/', fetchAllPost)
export default router;
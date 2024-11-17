import express from 'express'
import { createPost, fetchAllPost, fetchSinglePost } from '../controller/post.js';
const router = express.Router();


router.post('/create', createPost)
router.get('/', fetchAllPost)
router.get('/:postId', fetchSinglePost)
export default router;
import express from 'express'
import userRoute from './userRoute.js'
import postRoute from './postRoute.js'
const router = express.Router();

router.use('/api/user',userRoute )
router.use('/api/post',postRoute )
export default router;
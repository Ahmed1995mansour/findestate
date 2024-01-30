import express from 'express';
import { hello, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.get('/hello',hello)

router.post('/update/:id', verifyToken ,updateUser)
export default router
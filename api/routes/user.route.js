import express from 'express';
import { deleteUser, getUserListings, hello, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.get('/hello',hello)

router.post('/update/:id', verifyToken ,updateUser)

router.delete('/delete/:id', verifyToken, deleteUser)

router.get('/listings/:id', verifyToken,getUserListings)
export default router
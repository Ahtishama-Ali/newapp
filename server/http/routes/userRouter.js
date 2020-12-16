import express from 'express';
import UserRoutesCtrl from '../controller/userCtrl';
const userRouter = express.Router();


userRouter.post('/signin', UserRoutesCtrl.login)

userRouter.post('/signup', UserRoutesCtrl.signup)




export default userRouter;
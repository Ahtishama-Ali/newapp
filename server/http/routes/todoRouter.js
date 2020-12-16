import express from 'express';
import todoRoutesCtrl from "../controller/todoCtrl";
const todoRouter = express.Router();
import userAuth from '../middleware/auth'


todoRouter.get('/', userAuth, todoRoutesCtrl.getTodo)

todoRouter.get('/:id', userAuth, todoRoutesCtrl.getTodoById)

todoRouter.post('/add', userAuth, todoRoutesCtrl.addTodo)

todoRouter.put('/update/:id', userAuth, todoRoutesCtrl.updateTodo)

todoRouter.delete('/delete/:id', userAuth, todoRoutesCtrl.deleteTodo)


export default todoRouter;
import express from 'express';
import todoRoutesCtrl from "../controller/todoCtrl";
const todoRouter = express.Router();


todoRouter.get('/', todoRoutesCtrl.getTodo)

todoRouter.get('/:id', todoRoutesCtrl.getTodoById)

todoRouter.post('/add', todoRoutesCtrl.addTodo)

todoRouter.put('/update/:id', todoRoutesCtrl.updateTodo)

todoRouter.delete('/delete/:id', todoRoutesCtrl.deleteTodo)


export default todoRouter;
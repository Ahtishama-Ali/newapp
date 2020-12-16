import TodoClass from '../../application/services/todoService';

class todoRoutesCtrl {
    static async getTodo(req, res,) {
        console.log("getTodo userData",req.userData)
        const fetchAll = await TodoClass.fetchAllPost();
        res.json(fetchAll)
    }
    static async getTodoById(req, res) {

        const getOnePost = await TodoClass.fetchOnePost(req.params.id);
        console.log("update todo", req.params.id)
        res.json(getOnePost)

    }
    static async addTodo(req, res) {
        const post = await TodoClass.addTodoPost(req.body);
        res.json(post)
    }

    static async updateTodo(req, res) {
        console.log(req.body)
        const titleUpdate = await TodoClass.updateTodoPost(req.params.id, req.body)
        res.json(titleUpdate)
    }

    static async deleteTodo(req, res) {
        await TodoClass.deleteTodoPost(req.params.id);
        res.json("deleted successfulyy")

    }
}

export default todoRoutesCtrl;
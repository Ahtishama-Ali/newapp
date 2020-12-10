// import todoRoutesCtrl from '../../http/controller/todoCtrl';
import TodoRepositoryClass from '../../infrastructure/repository/todoRepository';


class TodoClass {
    static async fetchAllPost() {
        try {
            const fetchAll = await TodoRepositoryClass.fetchPost();
            return fetchAll
        } catch (err) {
            return err;
        }
    }

    static async fetchOnePost(id) {
        try {
            const fetchOne = await TodoRepositoryClass.fetchOnePost(id);
            return fetchOne
        } catch (err) {
            return err;
        }
    }

    static async addTodoPost(data) {
        try {
            const addtodo = await TodoRepositoryClass.addTodo(data);
            return addtodo
        } catch (err) {
            return err;
        }
    }

    static async updateTodoPost(id, data) {
        try {
            console.log('service', data)
            const updateTodo = await TodoRepositoryClass.updateTodo(id, data);
            return updateTodo
        } catch (err) {
            return err;
        }
    }

    static async deleteTodoPost(id) {
        try {
            await TodoRepositoryClass.deleteTodo(id)

        } catch (err) {
            return err;
        }
    }
}

export default TodoClass;
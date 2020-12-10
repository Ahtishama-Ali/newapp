import Post from '../model/todoModel';
import TodoEntity from '../../domain/entites/todoEntity';

class TodoRepositoryClass {
    static async fetchPost() {
        const getTitle = await Post.find()
        const getPost = getTitle.map(item => {
            // console.log("array item" , JSON.stringify(item))
            return TodoEntity.todoEntityObject(item);
        })
        // console.log("fetch all", JSON.stringify(getTitle))
        return getPost
    }

    static async fetchOnePost(id) {
        const getOnePost = await Post.findOne({ _id: id })
        return TodoEntity.todoEntityObject(getOnePost);
    }

    static async addTodo(data) {
        const postDetail = new Post({
            title: data.title,
            description: data.desc
        })

        await postDetail.save();
        return true
    }

    static async updateTodo(id, data) {
        console.log("update", data)
        await Post.findByIdAndUpdate({ _id: id }, { title: data.title, description: data.desc }, { new: true })
        return true
    }

    static async deleteTodo(id) {
        await Post.findByIdAndDelete({ _id: id })
        return true
    }

}

export default TodoRepositoryClass;
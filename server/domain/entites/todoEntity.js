
class TodoEntity {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    // static method m this key word use ni hota. 
    static todoEntityObject(data) {
        const item = new TodoEntity(data.id, data.title, data.description);
        return item;
    }

}

export default TodoEntity;

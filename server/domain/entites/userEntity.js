
class UserEntity {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static userEntityObject(data) {
        const user = new UserEntity(data.id, data.name, data.email);
        return user;
    }

    setPassword(password){
        this.password = password;
    }
}

export default UserEntity;
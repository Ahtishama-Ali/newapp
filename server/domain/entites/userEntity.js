
class UserEntity {
    constructor(name, email){
        this.name = name
        this.email = email;
    }

    static userEntityObject(data) {
        const user = new UserEntity(data.name, data.email);
        return user;
    }

    setPassword(password){
        this.password = password;
    }
}

export default UserEntity;
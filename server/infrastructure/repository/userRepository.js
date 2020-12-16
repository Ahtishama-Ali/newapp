import User from '../model/userModel';
import UserEntity from '../../domain/entites/userEntity';

class UserRepositoryClass {
    static async fetchByEmail(email) {
        return await User.findOne({ email });
    }

    static async add(data) {
        const user = new User(data);
        const savedUser = await user.save();
        return UserEntity.userEntityObject(savedUser);

    }


}

export default UserRepositoryClass;
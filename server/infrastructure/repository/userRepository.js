import User from '../model/userModel';
import UserEntity from '../../domain/entites/userEntity';

class UserRepositoryClass {
    static async loginUser(email) {
        const getUser = await User.findOne({email});
        return getUser;
    }

    static async checkUserEmail(email){
        return await User.findOne({email})
    }

    static async signupUser(data) {
        const user = new User(data);
        const savedUser = await user.save();
        return UserEntity.userEntityObject(savedUser);
        
    }

   
}

export default UserRepositoryClass;
import UserRepositoryClass from '../../infrastructure/repository/userRepository';
import UserEntity from "../../domain/entites/userEntity";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserServiceClass {
    static async userLogin(email, password) {
        
            const user = await UserRepositoryClass.fetchByEmail(email);
            if (!user) {
                throw new Error("auth failed");
            }
            console.log(user.password)

            const compPassword = await bcrypt.compare(password , user.password)

            if(!compPassword){
                throw new Error("auth faild");
            }
            const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: "1h" });
            console.log("token", token)
            const userObj = UserEntity.userEntityObject(user)
            console.log("userobject", userObj)
            return { userObj, token }

            // const sessionUser = UserEntity.userEntityObject(user)
            // session = sessionUser;
            // console.log("sessuib aaaaaaaaaaaaaaa", sessionUser)

    }

    static async userSignup(data) {

        const userIsPresent = await UserRepositoryClass.fetchByEmail(data.email)

        if (userIsPresent) {

            throw new Error("user already exist")
        }

        const user = UserEntity.userEntityObject(data);


        const hasPassword = await bcrypt.hash(data.password, 10)
        user.setPassword(hasPassword);
            return await UserRepositoryClass.add(user);
            
    }

}

export default UserServiceClass;
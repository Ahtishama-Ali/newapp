import UserRepositoryClass from '../../infrastructure/repository/userRepository';
import UserEntity from "../../domain/entites/userEntity";
import bcrypt from 'bcrypt';

class UserServiceClass {
    static async userLogin(email, password) {
        try {
            const user = await UserRepositoryClass.loginUser(email);
            console.log(JSON.stringify(user))
            if (!user) {
                throw new Error("auth failed");
            }
            console.log(user.password)

            const compass = await bcrypt.compare(password , user.password)
                console.log(compass)
            

            return UserEntity.userEntityObject(user)
        } catch (err) {
            return err;
        }
    }

    static async userSignup(data) {

        const checkEmail = await UserRepositoryClass.checkUserEmail(data.email)

        if (checkEmail) {

            throw new Error("user already exist")
        }

        const user = UserEntity.userEntityObject(data);
        console.log("*$$$$$$$$$$$$$$$$$$$$$$", user);

        // bcrypt.hash(data.password, 10, async (err, hash) => {
        //     if (err) throw err;

        //     data.password = hash;

        //     user.setPassword(data.password);
        //     const signup = await UserRepositoryClass.signupUser(user);
        //     console.log("called", signup)
        //     return signup
        // })

        const hasPassword = await bcrypt.hash(data.password, 10)
        user.setPassword(hasPassword);
            const signup = await UserRepositoryClass.signupUser(user);
            console.log("called", signup)
            return signup
    }

}

export default UserServiceClass;
import UserServiceClass from '../../application/services/userServiceClass';
import User from '../../infrastructure/model/userModel';

class UserRoutesCtrl {
    static async login(req, res) {
        try{
            const { email, password } = req.body;

            const user = await UserServiceClass.userLogin(email, password)
            console.log("###################",user)

            res.status(200).send({msg: "login successfully", result: user})
        }catch(e){
            res.status(400).send({ error: e.message });
        }
        
    }

    static async signup(req, res) {
        try {
            const post = await UserServiceClass.userSignup(req.body);
            res.status(200).send({ msg: "user register successfully" , res: post });
        } catch (e) {
            console.log("**************************",e);
            res.status(400).send({ error: e.message });
        }
    }
}

export default UserRoutesCtrl;
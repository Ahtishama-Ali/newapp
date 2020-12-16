import UserServiceClass from '../../application/services/userService';

class UserRoutesCtrl {
    static async login(req, res) {
        try{
            const { email, password } = req.body;
            // const { session } = req;

            const user = await UserServiceClass.userLogin(email, password)
            console.log("###################",user)

            res.status(200).send({result: user, msg: "user found"})
        }catch(e){
            console.log("****************************",e);
            res.json({ msg: e.message });
        }
        
    }

    static async signup(req, res) {
        // const {session} = req;
        try {
            const post = await UserServiceClass.userSignup(req.body);
            res.status(200).send({ msg: "user register successfully" , res: post });
        } catch (e) {
            console.log("**************************",e);
            res.send({ msg: e.message });
        }
    }

    // static async check(req, res) {
    //    await UserServiceClass.userCheck(req.session)
    // }

    // static async logout(req, res) {
    //     console.log("reskldfjalkdfj ", req)
    //     // const sessionCookieD = await req.session.destroy();
    //     // console.log("saaaaaaaaaaaaaaaaaaaaaaa",sessionCookieD)
    // }
  
}

export default UserRoutesCtrl;
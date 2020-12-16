import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decode = jwt.verify(token, 'secret')
        console.log("decode",decode)
        req.userData = decode;
        console.log("userData",req.userData)
        next();
    } catch (e) {
        console.log(e)
        res.json({
            error: e.message
        })
    }
}

export default userAuth;
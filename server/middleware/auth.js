import jwt from 'jsonwebtoken';

const SECRET = 'test';

const auth = async (req, res, next) => { // Verify that the user can perform the current action
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {      
            decodedData = jwt.verify(token, SECRET);
            req.userId = decodedData?.id;
            
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }    

        next();
    } catch (error) {
        console.log(error.message);
    }
};

export default auth;
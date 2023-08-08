import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => { // Verify that the user can perform the current action
    try {
        console.log("try");
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;
        console.log("runs");

        if (token && isCustomAuth) {    
            console.log(token);  
            decodedData = jwt.verify(token, 'test');
            console.log(decodedData);
            req.userId = decodedData?.id;
            
        } else {
            decodedData = jwt.decode(token);
            //console.log(decodedData);
            req.userId = decodedData?.sub;
        }    

        next();
    } catch (error) {
        console.log(error.message);
    }
};

export default auth;
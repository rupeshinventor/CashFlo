const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.signin = (req,res) => {
	const {email, password} = req.body;
    const errors = validationResult(req);
    
    //if errors are not empty then there might be some error
    if(!errors.isEmpty()) {
    	return res.status(422).json({
            error : errors.array()[0].msg
        });
    }

    //create token using user email and secret as shhhh!
    const token = jwt.sign({email : req.body.email}, 'shhhh!');
    //put token in cookie
    res.cookie("token", token, {expires : new Date(Date.now + 9000)});
    return res.json({
    	token : token,
    	message : 'logged in successfully'
    })
}
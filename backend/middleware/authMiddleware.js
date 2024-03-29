// auth protect middleware

import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler( async (req, res, next) => {
    let token;

    token  = req.cookies.jwt; //cookie parser

    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password'); // password is not returned.

            next();
        } catch(error) {
            res.status(401);
            throw new Error('Not authorized, invalid token');
        }

    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

export { protect };

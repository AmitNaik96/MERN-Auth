// non - existing route
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);  //next piece of middleware
}

//error from existing route
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    //special error(to be handled) from mongodb(mongoose : getting user from non existing id) CastError
    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack,  //gives you error at which line of code!!
    });
}

export { notFound, errorHandler};
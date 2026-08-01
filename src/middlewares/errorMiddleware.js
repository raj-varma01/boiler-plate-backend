const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        message: errorMessage
    });
}

export default errorHandler;
export const successResponse = (res, message, result) => {
    return res.status(200).send({ 
        success: true,
        message,
        result,
    });
}

export const errorResponse = ( res, status, errorMessage, error = {}) => {
    return res.status(status).send({
        success: false,
        errorMessage,
        error,
    })
}
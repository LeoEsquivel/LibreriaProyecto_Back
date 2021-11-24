const { response, request } = require("express");

module.exports = (err ,response, request, next) => {
    const httpStatus = err.status || 500;

    return response.status(httpStatus).send({
        status: httpStatus,
        message: err.message || "Internal server error"
    })
}
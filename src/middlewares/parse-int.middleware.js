module.exports = function(request, response, next){
    const queryStrings = request.query;

    for(const key in queryStrings){
        const length = queryStrings[key].length;
        const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));
        if(isValid){
            queryStrings[key] = parseInt(queryStrings[key]);
        }
    }

    request.query = queryStrings;
    next();
}
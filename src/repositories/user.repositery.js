const BaseRepositery = require('./base.repository');

let _user = null;

class UserRepositery extends BaseRepositery{
    
    constructor({ User }){
        super(User);
        _user = User;
    }

    async getUserByUsername(username){
        return await _user.findOne({username});
    }
}

module.exports = UserRepositery;
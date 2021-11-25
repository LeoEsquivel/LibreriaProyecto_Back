const BaseService = require('./base.service');

let _userRepository = null;

class UserService  extends BaseService{
    constructor({UserRepository}){
        super(UserRepository);
        _userRepository = UserRepository;
    }

    async getUSerByUsername(username){
        return await _userRepository.getUSerByUsername(username);
    }

}

module.exports = UserService;
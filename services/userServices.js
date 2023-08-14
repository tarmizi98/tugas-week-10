const UserRepository = require("../repositories/userRepository");

class UserService {
    static create = async (params) => {
        const user = await UserRepository.create(params);
        return user;
    }
    
    static findAll = async () => {
        const users = await UserRepository.findAll();
        return users
    }

    static findOne = async (id) => {
        const user = await UserRepository.findOne(id)
        return user
    }

    static update = async (id, body) => {
        const users = await UserRepository.update(id, body)
        return users
    }

    static delete = async (id) => {
        const users = await UserRepository.delete(id)
        return users
    }

}

module.exports = UserService;
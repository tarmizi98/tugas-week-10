const UserService = require("../services/userServices");

class UsersController {

    static create = async (req, res, next) => {
        try {
            const user = await UserService.create(req.body);

            res.status(201).json({message: "User created successfully"});
        } catch(err) {
            next(err)
        }
        
    }

    static findAll = async (req, res, next) => {
        try {
            const users = await UserService.findAll();
            res.status(201).json(users.rows)
        } catch(err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const user = await UserService.findOne(req.params.id)
            res.status(200).json(user.rows)
        } catch(err) {
            next(err)
        }
    }

    static update = async (req, res, next) => {
        try {
            const users = await UserService.update(req.params.id, req.body)
            res.status(200).json({message: "User update successfully"});
        } catch(err) {
            next(err)
        }
    }

    static delete = async (req, res, next) => {
        try {
            const users = await UserService.delete(req.params.id)
            res.status(200).json({message: "User delete successfully"});
        } catch(err) {
            next(err)
        }
    }
}

module.exports = UsersController;
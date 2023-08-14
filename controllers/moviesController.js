const MovieServices = require("../services/movieServices");

class MovieController {
    static findAll = async (req, res, next) => {
        try {
            const movies = await MovieServices.findAll();
            res.status(200).json(movies.rows)
        } catch(err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const movies = await MovieServices.findOne(req.params.id)
            res.status(200).json(movies.rows)
        } catch(err) {
            next(err)
        }
    }

    static create = async (req, res, next) => {
        try {
            const movies = await MovieServices.create(req.file, req.body)
            res.status(201).json({message: "Movie created successfully"});
        } catch(err) {
            next(err)
        }
    }

    static update = async (req, res, next) => {
        try {
            const movies = await MovieServices.update(req.params.id, req.file, req.body)
            res.status(200).json({message: "Movie update successfully"});
        } catch(err) {
            next(err)
        }
    }

    static delete = async (req, res, next) => {
        try {
            const movies = await MovieServices.delete(req.params.id)
            res.status(200).json({message: "Movie delete successfully"});
        } catch(err) {
            next(err)
        }
    }
}

module.exports = MovieController
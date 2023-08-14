const MovieRepository = require("../repositories/movieRepository");


class MovieServices {
    static findAll = async () => {
        const movies = await MovieRepository.findAll();
        return movies
    }

    static findOne = async (id) => {
        const movies = await MovieRepository.findOne(id)
        return movies
    }

    static create = async (file, body) => {
        const payload = {...body}

        if(file) {
            const linkImage = `http://localhost:3000/${file.filename}`    
            payload.photo = linkImage;
            }
        
        const movie = await MovieRepository.create(payload);
        return movie;
    }

    static update = async (id, file, body) => {
        const payload = {...body}

        if(file) {
            const linkImage = `http://localhost:3000/${file.filename}`    
            payload.photo = linkImage;
            }
        const movies = await MovieRepository.update(id, payload)
        return movies
    }

    static delete = async (id) => {
        const movies = await MovieRepository.delete(id)
        return movies
    }
}

module.exports = MovieServices
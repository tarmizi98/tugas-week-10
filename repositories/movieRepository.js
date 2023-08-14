const pool = require("../config/config");
const { randomNumberId } = require("../utils/common");


class MovieRepository {
    static findAll = async() => {
        const findQuery = `
        SELECT
            *
        FROM movies
        `
        const result = await pool.query(findQuery);
        return result
    }

    static findOne = async(id) => {
        const findQuery = `
            SELECT
                *
            FROM movies
                WHERE id = $1
        `
        const result = await pool.query(findQuery, [id])
        return result
    }

    static create = async (payload) => {
        const {title, genres, year, photo} = payload
        const insertQuery = `
        INSERT INTO movies(id, title, genres, year, photo)
            VALUES
                ($1, $2, $3, $4, $5)
        `

        const result = await pool.query(insertQuery, [randomNumberId(), title, genres, year, photo])
        return result;
    }

    static update = async (id, payload) => {
        const {title, genres, year, photo} = payload
        const updateQuery = `
            UPDATE movies
                SET title = $1,
                genres = $2,
                year = $3,
                photo = $4
            WHERE id = $5
            RETURNING *
         `

         const result = await pool.query(updateQuery, [title, genres, year, photo, id])
    }

    static delete = async (id) => {
        const deleteQuery = `
            DELETE FROM movies
            WHERE id = $1
            RETURNING *
        `
        const result = await pool.query(deleteQuery, [id])

    }
}

module.exports = MovieRepository;
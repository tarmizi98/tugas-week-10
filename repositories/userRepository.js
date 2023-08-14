const pool = require("../config/config.js")
const { randomNumberId } = require("../utils/common.js")

class UserRepository {
    
    static create = async (payload) => {
        const {email, gender, password, role} = payload
        const insertQuery = `
        INSERT INTO users(id, email, gender, password, role)
            VALUES
                ($1, $2, $3, $4, $5)
        `

        const result = await pool.query(insertQuery, [randomNumberId(), email, gender, password, role])
        return result;
    }

    static findAll = async() => {
        const findQuery = `
        SELECT
            *
        FROM users
        `
        const result = await pool.query(findQuery);
        return result
    }

    static findOne = async(id) => {
        const findQuery = `
            SELECT
                *
            FROM users
                WHERE id = $1
        `
        const result = await pool.query(findQuery, [id])
        return result
    }

    static update = async (id, payload) => {
        const {email, gender, role} = payload
        const updateQuery = `
            UPDATE users
                SET email = $1,
                gender = $2,
                role = $3
            WHERE id = $4
            RETURNING *
         `

         const result = await pool.query(updateQuery, [email, gender, role, id])
    }

    static delete = async (id) => {
        const deleteQuery = `
            DELETE FROM users
            WHERE id = $1
            RETURNING *
        `
        const result = await pool.query(deleteQuery, [id])

    }
}

module.exports = UserRepository;
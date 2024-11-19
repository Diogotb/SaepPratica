const pool = require('../config/db');

const Usuario = {
    async criar(nome, email) {
        const query = 'INSERT INTO usuarios (nome, email) VALUES ($1, $2)';
        await pool.query(query, [nome, email]);
    },
    async listar() {
        const query = 'SELECT * FROM usuarios';
        const result = await pool.query(query);
        return result.rows;
    }
};

module.exports = Usuario;

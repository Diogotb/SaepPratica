const pool = require('../config/db');

const Tarefa = {
    async criar(descricao, setor, prioridade, userId) {
        const query = 'INSERT INTO tarefas (descricao, setor, prioridade, user_id) VALUES ($1, $2, $3, $4)';
        await pool.query(query, [descricao, setor, prioridade, userId]);
    },
    async listar() {
        const query = 'SELECT * FROM tarefas';
        const result = await pool.query(query);
        return result.rows;
    },
    async atualizarStatus(id, status) {
        const query = 'UPDATE tarefas SET status = $1 WHERE id = $2';
        await pool.query(query, [status, id]);
    },
    async excluir(id) {
        const query = 'DELETE FROM tarefas WHERE id = $1';
        await pool.query(query, [id]);
    }
};

module.exports = Tarefa;

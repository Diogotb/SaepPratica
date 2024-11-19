const Usuario = require('../models/Usuario');

const usuarioController = {
    async listar(req, res) {
        const usuarios = await Usuario.listar();
        res.render('usuarios', { usuarios });
    },
    async criar(req, res) {
        const { nome, email } = req.body;
        await Usuario.criar(nome, email);
        res.redirect('/usuarios');
    }
};

module.exports = usuarioController;

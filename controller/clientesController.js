const express = require('express');

const clientesModel = require('../model/clientesModel');
const { where } = require('sequelize');

//Gerenciador de rotas
const router = express.Router();

// Rota de inserção de clientes (POST)
router.post('/clientes/inserir',(req, res)=>{

    let nome_clientes = req.body.nome_clientes;
    let cpf_clientes = req.body.cpf_clientes;
    let email_clientes = req.body.email_clientes;
    let telefone_clientes = req.body.telefone_clientes;
    let nascimento_clientes = req.body.nascimento_clientes;
    clientesModel.create(
        {nome_clientes,cpf_clientes,email_clientes,telefone_clientes,nascimento_clientes}
    ).then(
        ()=>{
            return res.status(201).json({
                errostatus:false,
                mensageStatus:'Cliente inserido com sucesso.'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errostatus:true,
                mensageStatus:error
            })
        }
    );
});

// Rota de seleção de clientes(GET)
router.get('/clientes/selecionar',(req, res)=>{
    clientesModel.findAll()
    .then(
        (clientes)=>{
            res.json(clientes);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errostatus:true,
                mensageStatus:error
            })
        }
    );
});

// Rota de alteração de clientes
router.put('/clientes/alterar', (req, res)=>{
    let id = req.body.id;
    let nome_clientes = req.body.nome_clientes;

    clientesModel.update(
        {nome_clientes},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errostatus:false,
                mensageStatus:'Cliente alterado com sucesso.'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errostatus:true,
                mensageStatus:error
            })
        }
    );
});

// Rota de exclusão de clientes
router.delete('/clientes/excluir/:id',(req, res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);

    clientesModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errostatus:false,
                mensageStatus:'cliente excluido com sucesso.'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errostatus:true,
                mensageStatus:error
            })
        }
    );
});

module.exports = router; // EXTERNA AS ROTAS PARA OUTROS ARQUIVOS
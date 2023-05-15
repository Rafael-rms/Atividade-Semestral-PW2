/* Impostação do sequelize */
const sequelize = require('sequelize');

// Importação da conexão co  o banco de dados
const conection = require('../database/database');

/*
Definição da estrutura da tabela de clientes
Parametros:
1 - nome da tabela
2 - um ou mais objetos json vão representar os campos, seus tipos e regras de preenchimentos
*/

const clientes = conection.define(
    'tbl_clientes',
    {
        nome_clientes:{
            type: sequelize.STRING,
            allowNull: false
        },
        cpf_clientes:{
            type: sequelize.STRING,
            allowNull: false
        },
        email_clientes:{
            type: sequelize.STRING,
            allowNull: false
        },
        telefone_clientes:{
            type: sequelize.STRING,
            allowNull: false
        },
        nascimento_clientes:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//clientes.sync({force:true});  //sincroniza com o banco de dados. Cria tabela

module.exports = clientes;
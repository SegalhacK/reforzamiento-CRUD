const Sequelize = require('sequelize');
const secret = require('./secret') // importo el modulo del archivo SECRET.JS

// con esto creamos la conexión a la Base de Datos
const sql = new Sequelize('reforzamiento', 'root', secret.password, {
    host: 'localhost',
    dialect: 'mysql'
});

// Construcción de modelos
const Users = sql.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        comment: 'Email debe ser único para ingresar al sitio'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, { timestamps: true }); // agregamos CREATED AT y UPDATED AAT

// DB debe SINCRONIZARSE 
sql.sync()
    .then(() => {
        console.log('Tablas creadas. Conectado a la DB');
    });


module.exports = {
    Users,
};
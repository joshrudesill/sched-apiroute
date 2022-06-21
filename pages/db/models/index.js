const Sequelize = require('sequelize')

const sequelize = new Sequelize("mysql://rpt21wxk7bzg:pscale_pw_4n9qpG3t49XlbHaT7xoGN_EguwHYGHHEOPRYS5OX2T4@6dey8fye7m79.us-east-3.psdb.cloud/sched-db",
{
  dialect: "mysql2",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
      ssl: true
    }
  }
});
sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
const Users = sequelize.define('users', 
  { 
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    acID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    accountType: Sequelize.STRING
    ///...
  }, { 
    freezeTableName: true 
  });

module.exports = { Users, sequelize }
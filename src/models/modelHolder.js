import config from 'config';
import Sequelize from 'sequelize';
import Image from '../models/image';

const dbConfig = config.get('db');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Image = Image(sequelize, Sequelize);

module.exports = db;
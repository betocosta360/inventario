import { Sequelize } from 'sequelize';
import config from '../config/database';
import User from '../models/user';
import Sector from '../models/sector';
import Computers from '../models/computers';
import Scanner from '../models/scanner';
import Impressora from '../models/impressora';
import Notebook from '../models/notebook'



const models = [User, Sector, Computers, Scanner, Impressora, Notebook];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();

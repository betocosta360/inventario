import Sequelize, { Model } from 'sequelize'
class Computers extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        sector_id: Sequelize.INTEGER,
        fabricante: Sequelize.STRING,
        number_serie: Sequelize.STRING,
        proprietario: Sequelize.STRING,
        status: Sequelize.ENUM('active', 'maintenance'),
        

      },
      {
        sequelize,
        name: {
          singular: 'computer',
          plural: 'computers'
        }
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Sector,{
      foreignKey: 'sector_id'
     })
  }
}

export default Computers


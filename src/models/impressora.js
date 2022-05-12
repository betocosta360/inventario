import Sequelize, { Model } from 'sequelize'
class Impressora extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        sector_id: Sequelize.INTEGER,
        fabricante: Sequelize.STRING,
        modelo: Sequelize.STRING,
        number_serie: Sequelize.STRING,
        proprietario: Sequelize.STRING,
        status: Sequelize.ENUM('active', 'maintenance')

      },
      {
        sequelize,
        name: {
          singular: 'impressora',
          plural: 'impressoras'
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

export default Impressora


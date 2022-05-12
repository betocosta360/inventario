import Sequelize, { Model } from 'sequelize'
class Sector extends Model {
  static init(sequelize) {
    super.init(
      {
        initials: {
          type: Sequelize.VIRTUAL,
          get() {
            const match = this.name.split(" ")
            if (match.length > 1) {
              return `${match[0][0]}${match[match.length - 1][0]}`
            } else {
              return match[0][0]
            }
          }
        },
        name: Sequelize.STRING,
        
      },
      {
        sequelize,
        name:{
          singular: 'sector',
          plural: 'sectors'
        }
      }
      )
  }
  static associate(models){
   this.hasMany(models.User)
  }
}

export default Sector
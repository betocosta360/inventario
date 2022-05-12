'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('computers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fabricante: {
        type: Sequelize.STRING,
        allowNull: false
      },
     
      number_serie: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      proprietario: {
        type: Sequelize.STRING,
        allowNull:false
      },
      user_id: {
        type: Sequelize.INTEGER,
        References: {model: 'user', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sector_id: {
        type: Sequelize.INTEGER,
        References: {model: 'sector', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status:{
        type: Sequelize.ENUM('active', 'maintenance'),
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('computers');
  }
};
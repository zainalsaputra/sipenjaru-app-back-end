const { Sequelize } = require('sequelize');
const Models = require('./models');

class Courses extends Models {
  constructor(dataTypes) {
    super(dataTypes);
  }

  defineSchema() {
    return this.createModel({
      id: {
        primaryKey: true,
        type: this.dataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      name: {
        allowNull: false,
        type: this.dataTypes.STRING,
      },
      beforeTime: {
        allowNull: true,
        type: this.dataTypes.STRING,
      },
      afterTime: {
        allowNull: true,
        type: this.dataTypes.STRING,
      },
      session: {
        allowNull: true,
        type: this.dataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: this.dataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: this.dataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  }
}

module.exports = Courses;

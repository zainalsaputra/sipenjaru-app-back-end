const { Sequelize } = require('sequelize');
const Models = require('./models');

class Users extends Models {
  constructor(dataTypes) {
    super(dataTypes);
  }

  defineSchema() {
    return this.createModel({
      id: {
        // autoIncrement: false,
        primaryKey: true,
        type: this.dataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      name: {
        allowNull: false,
        type: this.dataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: this.dataTypes.STRING,
      },
      accessToken: {
        allowNull: true,
        type: this.dataTypes.STRING,
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
      roleId: {
        allowNull: true,
        type: this.dataTypes.UUID,
        references: {
          model: 'roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    });
  }
}

module.exports = Users;

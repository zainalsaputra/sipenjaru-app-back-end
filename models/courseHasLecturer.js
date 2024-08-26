const { Sequelize } = require('sequelize');
const Models = require('./models');

class courseHasLecturer extends Models {
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
      courseId: {
        allowNull: true,
        type: this.dataTypes.UUID,
        references: {
          model: 'courses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      lecturerId: {
        allowNull: true,
        type: this.dataTypes.UUID,
        references: {
          model: 'lecturers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },

    });
  }
}

module.exports = courseHasLecturer;

/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const Rooms = require('../models/rooms');

const rooms = new Rooms(Sequelize);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'rooms',
      rooms.defineSchema(),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  },
};

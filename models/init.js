const { DataTypes } = require('sequelize');
const Rooms = require('./rooms');

const rooms = new Rooms(DataTypes);

console.log(rooms.defineSchema());

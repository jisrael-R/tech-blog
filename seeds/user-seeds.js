const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username:'mike01',
    password: 'password123'
  },
  {
    username:'mike03',
    password: 'password123'
  },
  {
    username:'mike04',
    password: 'password123'
  },
  {
    username:'mike05',
    password: 'password123'
  },
  {
    username:'mike06',
    password: 'password123'
  },
  {
    username:'mike07',
    password: 'password123'
  },
  {
    username:'mike08',
    password: 'password123'
  },
  {
    username:'mike09',
    password: 'password123'
  },
  {
    username:'mike10',
    password: 'password123'
  },
  {
    username:'mike11',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        profilePicture: "../../images/mark.jpg",
      },
      {
        email: 'user1@user.io',
        username: 'user1',
        hashedPassword: bcrypt.hashSync('password1'),
        profilePicture: "../../images/buffet.jpg",
      },
      {
        email: 'user2@user.io',
        username: 'user2',
        hashedPassword: bcrypt.hashSync('password1'),
        profilePicture: "../../images/ceo.jpg",
      },
      {
        email: 'will@squora.io',
        username: 'will',
        hashedPassword: bcrypt.hashSync('Will1!'),
        profilePicture: "../../images/will.jpg",
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'user1', 'user2', 'will'] }
    }, {});
  }
};

'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        profilePicture: "https://www.pngitem.com/pimgs/m/524-5246388_anonymous-user-hd-png-download.png",
      },
      {
        email: 'user1@user.io',
        username: 'user1',
        hashedPassword: bcrypt.hashSync('password1'),
        profilePicture: "https://www.pngitem.com/pimgs/m/524-5246388_anonymous-user-hd-png-download.png",
      },
      {
        email: 'user2@user.io',
        username: 'user2',
        hashedPassword: bcrypt.hashSync('password1'),
        profilePicture: "https://ca.slack-edge.com/T03GU501J-U025F637031-gb09ca85017a-72",
      },
      {
        email: 'will@squora.io',
        username: 'will',
        hashedPassword: bcrypt.hashSync('Will1!'),
        profilePicture: "https://ca.slack-edge.com/T03GU501J-U026FTGTV4Z-fe9950702ece-512",
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

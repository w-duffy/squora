'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Pro_investor',
        hashedPassword: bcrypt.hashSync('password'),
        profilePicture: "https://www.montlakeucits.com/files/2315/2830/2864/Mark_Okada.jpg",
      },
      {
        email: 'user1@user.io',
        username: 'Mr_Money',
        hashedPassword: bcrypt.hashSync('password1'),
        profilePicture: "https://pbs.twimg.com/profile_images/3599636117/8468a03db84ec4211c3efeba18ac3925_400x400.png",
      },
      {
        email: 'user2@user.io',
        username: 'President',
        hashedPassword: bcrypt.hashSync('password1'),
        profilePicture: "https://media.istockphoto.com/photos/hes-always-a-busy-man-picture-id1158343326?k=20&m=1158343326&s=612x612&w=0&h=bUPZ16QCtV9fMjF5HL2q1Q-H2Zb_cEhGJsYxfvjneOk=",
      },
      {
        email: 'will@squora.io',
        username: 'Will',
        hashedPassword: bcrypt.hashSync('Will1!'),
        profilePicture: "https://i.ibb.co/hs9s0dX/T03-GU501-J-U026-FTGTV4-Z-fe9950702ece-512-1.jpg",
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Pro_investor', 'Mr Money', 'President', 'Will'] }
    }, {});
  }
};

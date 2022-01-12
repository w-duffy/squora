'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Upvotes",
      [
        {
          answerId: 2,
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answerId: 2,
          ownerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answerId: 3,
          ownerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answerId: 4,
          ownerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Upvotes", null, {});

  }
};

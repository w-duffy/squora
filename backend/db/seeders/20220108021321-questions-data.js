'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Questions",
      [
        {
          ownerId: 1,
          description: "hello world",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          description: "Testing out the questions?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          description: "What is users 2 question?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          description: "Testing out user 3 questions?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Questions", null, {});
  }
};

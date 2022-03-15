'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Questions",
      [
        {
          ownerId: 1,
          description: "What is a way to devise a clear-cut method for measuring the success or failure of your portfolio?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          description: "How do I identify my personal risk tolerance?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          description: "How do I measure diversification in my portfolio?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 4,
          description: "Is now a good time to invest in the stock market?",
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

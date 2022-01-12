'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Answers",
      [
        {
          ownerId: 1,
          questionId: 2,
          answer: "I think comparing your portfolio to benchmark indexes is a good way to compare its success.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          questionId: 3,
          answer: "Always be ready to lose what you invest.  If you are not okay loosing that amount, then do not invest.  Maybe consider allocating less capital into your investments.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          questionId: 4,
          answer: "There are several ways to measure diversification in your portfolio.  I would consider asking a financial advisor if you're new to investing.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 4,
          questionId: 1,
          answer: "It depends on your personal risk tolerance.  Historically, the market has gone up, but it does experience volatility.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )},


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Answers", null, {});
  }
};

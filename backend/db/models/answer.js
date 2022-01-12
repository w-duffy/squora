'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" },
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Questions" },
    },
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.User, { foreignKey: "ownerId" });
    Answer.belongsTo(models.Question, { foreignKey: "questionId" });
    Answer.hasMany(models.Upvote, { foreignKey: "answerId" });
  };
  return Answer;
};

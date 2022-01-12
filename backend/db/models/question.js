'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.User, { foreignKey: "ownerId" });
    Question.hasMany(models.Answer, { foreignKey: "questionId" });
  };
  return Question;
};

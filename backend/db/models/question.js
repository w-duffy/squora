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
    topicId: {
      type: DataTypes.INTEGER
      //include reference to Topics model here
    }
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.User, { foreignKey: "ownerId" });
  };
  return Question;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upvote = sequelize.define('Upvote', {
    answerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Answers" },
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" },
    },
  }, {});
  Upvote.associate = function(models) {
    Upvote.belongsTo(models.User, { foreignKey: "ownerId" });
    Upvote.belongsTo(models.Answer, { foreignKey: "answerId" })
  };
  return Upvote;
};

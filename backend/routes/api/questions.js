const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Question, User } = require("../../db/models");


const router = express.Router();

const validateQuestion = [
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a question."),
  handleValidationErrors,
];

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const question = await Question.findAll({include: {model: User}});
    return res.json(question);
  })
);

module.exports = router;

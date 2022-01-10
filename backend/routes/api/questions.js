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
    const question = await Question.findAll({ include: { model: User } });
    return res.json(question);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { ownerId, description, topicId } = req.body;
    const question = await Question.create(req.body);
    return res.json(question);
  })
);


router.put(
  "/:id/edit",
  asyncHandler(async (req, res) => {
    const { id, description } = req.body;
    const questionToUpdate = await Question.findByPk(id);

    const question = {
      description,
    }
    const update = await questionToUpdate.update(question)
    return res.json(update)
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const question = await Question.findByPk(id);
    await question.destroy()
  })
);

module.exports = router;

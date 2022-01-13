const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Question, User, Answer } = require("../../db/models");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (_req, res) => {
      const answers = await Answer.findAll();
      return res.json(answers);
    })
  );

  router.post(
    "/",
    asyncHandler(async (req, res) => {
      console.log(req.body)
      const { ownerId, answer, questionId } = req.body;
      const a = await Answer.create(req.body);
      return res.json(a);
    })
  );


  module.exports = router;

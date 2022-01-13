const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const questionsRouter = require('./questions.js');
const answersRouter = require('./answers.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/questions', questionsRouter);

router.use('/answers', answersRouter);


module.exports = router;

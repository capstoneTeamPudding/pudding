const router = require('express'). Router()
const User = require("../db/models/User");

router.post('/', async (req, res, next) => {
    try {
      res.json(await User.create(req.body));
    } catch (error) {
      next(error);
    }
  });
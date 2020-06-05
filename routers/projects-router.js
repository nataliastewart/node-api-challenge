const express = require("express");
const dbProjects = require("../data/seeds/01-projects");

//import router from express
const router = express.Router();

router.get("/", function (req, res) {
  try {
    return res.status(200).json(dbProjects);
  } catch (error) {
    return res
      .status(500)
      .json({ errorMessage: "The users information could not be retrieved." });
  }
});

module.exports = router;

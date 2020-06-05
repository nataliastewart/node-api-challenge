const express = require("express");
const router = express.Router();
router.use(express.json());

const actionsModel = require("../data/helpers/actionModel");

//endpoints----ACTIONS-----

//GET
router.get("/", function (req, res) {
  const { id } = req.params;

  actionsModel
    .get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((error) => {
      console.log("CATCH ERROR GET:", error);
      res.status(500).json({
        errorMessage: "The users information could not be retrieved.",
      });
    });
});

router.post("/", (req, res) => {
  actionsModel
    .insert(req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((error) => {
      console.log("POST CATCH ERROR", error);
      res.status(500).json({
        error: "There was an error while saving the project to the database",
      });
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();
router.use(express.json());

const actionsModel = require("../data/helpers/actionModel");

//endpoints----ACTIONS-----

//GET
router.get("/", function (req, res) {
  const { id } = req.params;

  actionsModel
    .get(req.query, id)
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

module.exports = router;

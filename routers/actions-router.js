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

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  actionsModel.remove(id).then((item) => {
    if (item == item > 0) {
      res.status(200).json({ message: `The ACTION ${id} has been deleted` });
    } else {
      res.status(500).json({
        message: "Error removing the ACTION",
      });
    }
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedaction = req.body;

  actionsModel.update(id, updatedaction).then((item) => {
    if (item.id == id) {
      res.status(201).json({ ...updatedaction });
    } else {
      res.status(500).json({ error: "The post could not be updated" });
    }
  });
});

module.exports = router;

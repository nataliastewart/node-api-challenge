const express = require("express");

const projectModel = require("../data/helpers/projectModel");

//import router from express
const router = express.Router();
router.use(express.json());

// endpoints -----------
router.get("/", function (req, res) {
  projectModel
    .get()
    .then((p) => {
      res.status(200).json(p);
    })
    .catch((error) => {
      console.log("CATCH ERROR GET:", error);
      res.status(500).json({
        errorMessage: "The projects information could not be retrieved.",
      });
    });
});

router.post("/", (req, res) => {
  projectModel
    .insert(req.body)
    .then((project) => {
      res.status(201).json(project);
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

  projectModel.remove(id).then((item) => {
    if (item == item > 0) {
      res.status(200).json({ message: `The project ${id} has been deleted` });
    } else {
      res.status(500).json({
        message: "Error removing the project",
      });
    }
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedProject = req.body;

  projectModel.update(id, updatedProject).then((item) => {
    if (item.id == id) {
      res.status(201).json({ ...updatedProject });
    } else {
      res.status(500).json({ error: "The post could not be updated" });
    }
  });
});

module.exports = router;

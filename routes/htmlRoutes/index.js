const router = require("express").Router();
const path = require("path");

// main
router.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// exercise
router.get("/exercise", (_req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
});

// stats
router.get("/stats", (_req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
});

module.exports = router;

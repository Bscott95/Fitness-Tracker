const router = require("express").Router();
const fitnessController = require("../../controllers/fitnessController.js");

router
  .route("/workouts")
  .get(fitnessController.getLastWorkout)
  .post(fitnessController.createWorkout);
router.route("/workouts/:id").put(fitnessController.addExercise);
router.route("/workouts/range").get(fitnessController.getWorkoutsInRange);

module.exports = router;

const router = require("express").Router();
const Workout = require("../models/exercise");

router.get("/exercise", (req, res) => {
  res.redirect("exercise.html");
});

router.get("/stats", (req, res) => {
  res.redirect("stats.html");
});

router.get("/api/workouts", async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({ date: -1 });
    console.log(workout);
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/api/workouts", async ({ body }, res) => {
  try {
    const workout = await Workout.create(body);
    console.log(workout);
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({ date: -1 });
    console.log(workout);
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

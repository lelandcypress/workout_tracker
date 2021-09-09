const router = require("express").Router();
const Workout = require("../models/workouts");
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({ date: -1 });
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const workout = await Workout.create();

    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const workout = await Workout.find({});
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    ({ body, id } = req);
    const query = { _id: id };
    const update = { exercises: body };
    const workout = await Workout.findOneAndUpdate(query, update, {
      upsert: true,
    });
    console.log("PUT REQUEST +" + workout);
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

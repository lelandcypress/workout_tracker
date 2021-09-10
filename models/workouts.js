const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Breaking the exercises into a seperate schema allows for more efficient code maintenance//
const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Please select Cardio or Resistance",
  },
  name: {
    type: String,
    trim: true,
    required: "Please enter workout name",
  },
  duration: {
    type: Number,
    trim: true,
  },
  weight: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  distance: {
    type: Number,
    trim: true,
  },
});
//Leveraging subdocument arrays allows use to use .push method to add exercises to each workout//
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [ExerciseSchema],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

const router = require("express").Router();
const Workout = require("../models/workout.js");
router.post("/api/workouts", (req, res) =>{
    Workout.create({}).then(
        dbWorkout => {
            res.json(dbWorkout);
        }).catch(err =>{
            res.status(400).json(err);
        });
});

module.exports = router;
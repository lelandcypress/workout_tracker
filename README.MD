# Workout Tracker

## Table of contents

1. [Description](#Description)
2. [Installation](#Instructions)
3. [Usage](#Usage)
4. [License](#License)
5. [Contribution](#Contribution)
6. [Tests](#Tests)
7. [Questions](#Questions)

## Description

A handy web application that helps you meet your goals by logging your workouts.

## Installation

If running locally ensure that you have installed all node packages before kicking anything off. This app uses Mongo to store workout data so make sure you have Mongo installed.

## Usage

1. Upon initial navigation the client will be greated at the homepage with their previous workout statistics.
2. User will have the option to either create a new workout or to add an exercise to an existing workout.
3. Either option will prompt a drop down list where one can select resistance or cardio.
4. Depending on which type selected the user will be prompted for information on the exercise.
5. If the user has another exercise to add, they can click "Add Exercise". If this is the last exercise, select "Complete"
6. Either option will send a PUT request which will update the exercise array associated with the workouts schema.
7. Homepage window will be updated with the latest workout stats
8. User can navigate to the Dashboard where they can see their workout trends.

## License

MIT ![MIT](./pics/MIT.svg)

## Contribution

This is a work in progress as I intend to add some more features such as an API call for workout suggested workouts, updating the charts to track individual exercises, etc. If you want to collaborate, reach out to me via email, github, or feel free to fork it and build on it.

## Tests

run the seed file via npm seed to give you a good baseline for how the app stores data (plus that's a good check to make sure Mongo is working). Once you successfully seed the file, Create and modify exercises to make sure the app is updating data. I'd recommend creating a resistance and cardio exercise. Compare homepasge dashboard results to your Mongo querries.

## Questions

Got questions, or are interested in collaborating?

Github:https://github.com/lelandcypress

Email: souterm1@gmail.com

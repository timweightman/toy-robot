[![Build Status](https://travis-ci.org/timweightman/toy-robot.svg?branch=master)](https://travis-ci.org/timweightman/toy-robot) [![codecov](https://codecov.io/gh/timweightman/toy-robot/branch/master/graph/badge.svg)](https://codecov.io/gh/timweightman/toy-robot)

# :robot: Toy Robot

## Description
I've built this as a node.js command line app. Instructions are below.
The CLI and simulation are separated from the commands that are used to control the simulation. This should make it trivial to develop a non-CLI interface.

The commands under `src/commands` treat the simulation table as though it is immutable, which makes them easier to test.

Where there would be significant duplication, I've abstracted those things into helper functions under the `src/utils/` folder.

Transitions from NORTH / SOUTH / EAST / WEST, when moving or turning, have been configured in `src/config/facing.js`. I used a `.js` extension since babel would copy it automatically as part of the build step. Saves me a tiny bit of hassle.

## Getting started
1. `node -v` Open terminal and run `node -v` to ensure you have node `v6.3.1` or greater installed. You can download node from here: https://nodejs.org.

1. `npm install` Install the project dependencies.

## Cheat sheet
- `npm test` Run tests.
    
    `npm test -- --coverage --verbose` Print coverage report and detailed test results.

- ``npm start <<< `cat support/cli-examples.txt` `` Auto-run examples from `PROBLEM.md`.

- `npm start` Start the interactive CLI.

# Final thoughts
Thanks for the opportunity to take part in this coding exercise. It was good fun and I hope you're happy with the quality of my submission.

# Number Guessing Game

A simple number guessing game built with HTML, CSS, and JavaScript. The goal of the game is to guess the randomly generated number by selecting from a grid of numbers.

## Features

- **Random Number Generation**: A random number is generated for the player to guess.
- **Timer**: A countdown timer limits the time a player has to guess the number.
- **Score Tracking**: Correct guesses increase the player's score by 20 points.
- **Shake Animation**: Incorrect guesses trigger a shake animation on the selected number.
- **Restart Option**: Once the timer runs out, the player has the option to restart the game.

## How to Play

1. When the game starts, a random number between 0 and 9 is generated and displayed in the "Number" field.
2. Click on a number from the grid that you think matches the generated number.
3. If you guess correctly, your score increases and a new number is generated.
4. If you guess incorrectly, the selected number will shake.
5. The game will end once the timer runs out. You can choose to restart the game or close the window.

## Files

- `index.html`: The HTML file that defines the structure of the game.
- `style.css`: The CSS file that styles the game interface.
- `script.js`: The JavaScript file that controls the game logic.

## Running the Game

To run the game, simply open the `index.html` file in any modern web browser.

## Customization

You can customize the following:
- **Total Bubbles**: Modify the total number of bubbles (default is 153) by adjusting the parameter in the `resetGame()` function.
- **Timer**: Adjust the initial timer value by changing the `counter` variable in the JavaScript file.
- **Scoring**: The score increment per correct guess can be adjusted in the `checkNum()` function.

/**
 * Main application file that handles command-line arguments.
 * It processes commands for filtering animals or counting entities (people and animals).
 */


const AnimalController = require('./src/controllers/AnimalController');
const { ERROR_INVALID_COMMAND } = require('./src/errors/errorMessages');


// Get command-line arguments
const args = process.argv.slice(2);
const command = args[0];
let pattern = null;

// Check if the command is --filter
if (command.startsWith('--filter')) {
       pattern = command.split('=')[1] || args[1];
       if (pattern) {
              pattern = pattern.trim();
       }
}

// Call the filter method if a pattern is provided
if (pattern) {
       AnimalController.handleFilterRequest(pattern);
} else if (command === '--count') {
       AnimalController.handleCountRequest();
} else {
       throw new Error(ERROR_INVALID_COMMAND);
}

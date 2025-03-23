/**
 * Provides methods to handle requests related to animal data.
 * Includes methods for filtering animals by pattern and counting entities (people and animals).
 * 
 * * @class AnimalController
 */

const AnimalService = require('../services/AnimalService');

class AnimalController {

       /**
       * Filters animals by name pattern and logs the result.
       * 
       * @param {string} pattern - The pattern to search in animal names.
       * @returns {void}
       */
       static handleFilterRequest(pattern) {
              const result = AnimalService.filterAnimals(pattern);
              console.log(JSON.stringify(result, null, 2));
       }

       /**
        * Counts the number of animals per person and people per country, then logs the result.
        * 
        * @returns {void}
       */
       static handleCountRequest() {
              const result = AnimalService.countEntities();
              console.log(JSON.stringify(result, null, 2));
       }
}

module.exports = AnimalController;



/**
 * Repository class for managing access to animal data.
 * Provides a method to retrieve animal data.
 * 
 * @class AnimalRepository
 */

const ERROR_INVALID_DATA = 'Data is either missing or malformed';
const data = require('../../data/data.js');

class AnimalRepository {

       /**
        * Retrieves the animal data and throws an error if the data is missing or malformed.
        * 
        * @returns {Array} Animal data
        * @throws {Error} Throws an error if the data is invalid
        */
       static getData() {
              if (!data || !data.data || !Array.isArray(data.data)) {
                     throw new Error(ERROR_INVALID_DATA);
              }
              return data.data;
       }
}

module.exports = AnimalRepository;

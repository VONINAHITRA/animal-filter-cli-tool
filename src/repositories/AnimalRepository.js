/**
 * Repository class for managing access to animal data.
 * Provides a method to retrieve animal data.
 * 
 * @class AnimalRepository
 */
const data = require('../../data/data.js');

class AnimalRepository {

       // Retrieves the animal data
       static getData() {
              return data.data;
       }
}

module.exports = AnimalRepository;

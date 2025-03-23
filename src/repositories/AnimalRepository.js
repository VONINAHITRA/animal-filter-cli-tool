/**
 * Provides access to animal-related data from an external source.
 * Includes a method to retrieve the animal data.
 */

const data = require('../../data/data.js');

class AnimalRepository {
       static getData() {
              return data.data;
       }
}

module.exports = AnimalRepository;

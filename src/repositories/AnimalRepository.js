/**
 * Repository class for managing access to animal data.
 * Provides a method to retrieve animal data.
 * 
 * @class AnimalRepository
 */

const { Country, Person, Animal } = require('../models');
const datas = require('../../data/data.js');
const { ERROR_INVALID_FORMAT } = require('../errors/errorMessages');

class AnimalRepository {

       /**
        * Retrieves and transforms the animal data into model instances (Country, Person, Animal).
       * Throws an error if the data is invalid or not in the expected format.
       * 
       * @returns {Array} - A list of Country objects, each containing an array of Person objects, 
       *                    who in turn have a list of Animal objects.
       * @throws {Error} - Throws an error if the data is missing or malformed.
     */

       static getData() {
              if (!datas || !datas.data || !Array.isArray(datas.data)) {
                     throw new Error(ERROR_INVALID_FORMAT);
              }

              // Convert the data into model objects (Country, Person, Animal)
              return datas.data.map(countryData => {
                     const people = countryData.people.map(personData => {
                            const animals = personData.animals.map(animalData => new Animal(animalData.name));
                            return new Person(personData.name, animals);
                     });
                     return new Country(countryData.name, people);
              });
       }
}

module.exports = AnimalRepository;

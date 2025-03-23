/**
 * Provides services for managing animal-related data.
 * Includes methods to filter animals by name and count entities (people and animals).
 */

const AnimalRepository = require('../repositories/AnimalRepository');
const { INVALID_DATA_FORMAT, ERROR_PATTERN_MUST_BE_STRING } = require('../utils/constante');

class AnimalService {

       /**
        * Filters animals based on the given pattern in their name.
        * Throws an error if pattern is not a string.
        * 
        * @param {string} pattern - The pattern to search for in animal names.
        * @returns {Array} - A list of countries with filtered people and animals.
        * @throws {Error} - Throws an error if the pattern is not a string.
        */
       static filterAnimals(pattern) {
              if (typeof pattern !== 'string') {
                     throw new Error(ERROR_PATTERN_MUST_BE_STRING);
              }

              const countries = AnimalRepository.getData();

              return countries.filter(country => {
                     country.people = country.people.filter(person => {
                            person.animals = person.animals.filter(animal =>
                                   animal.name.toLowerCase().includes(pattern.toLowerCase())
                            );
                            return person.animals.length > 0;
                     });
                     return country.people.length > 0;
              });
       }

       /**
        * Counts the number of animals per person and people per country.
        * 
        * @returns {Array} - A list of countries with updated people and animal counts.
        * @throws {Error} - Throws an error if the data is malformed.
        */
       static countEntities() {
              const countries = AnimalRepository.getData();

              if (!Array.isArray(countries)) {
                     throw new Error(INVALID_DATA_FORMAT);
              }

              return countries.map(country => {
                     const peopleWithCount = country.people.map(person => {
                            const animalsCount = person.animals ? person.animals.length : 0;
                            return {
                                   name: `${person.name} [${animalsCount}]`,
                                   animals: person.animals || [],
                            };
                     });
                     const peopleCount = peopleWithCount.length;
                     return {
                            name: `${country.name} [${peopleCount}]`,
                            people: peopleWithCount,
                     };
              });
       }
}

module.exports = AnimalService;

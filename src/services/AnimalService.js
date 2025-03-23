/**
 * Provides services for managing animal-related data.
 * Includes methods to filter animals by name and count entities (people and animals).
 */

const AnimalRepository = require('../repositories/AnimalRepository');

class AnimalService {
       static filterAnimals(pattern) {
              const data = AnimalRepository.getData();
              return data
                     .map((country) => {
                            const filteredPeople = country.people
                                   .map((person) => {
                                          const filteredAnimals = person.animals.filter((animal) =>
                                                 animal.name.toLowerCase().includes(pattern.toLowerCase())
                                          );
                                          if (filteredAnimals.length > 0) {
                                                 return { ...person, animals: filteredAnimals };
                                          }
                                   })
                                   .filter(Boolean);

                            if (filteredPeople.length > 0) {
                                   return { ...country, people: filteredPeople };
                            }
                     })
                     .filter(Boolean);
       }

       static countEntities() {
              const data = AnimalRepository.getData();
              return data.map((country) => {
                     const updatedPeople = country.people.map((person) => {
                            const animalCount = person.animals.length;
                            return { ...person, name: `${person.name} [${animalCount}]` };
                     });

                     const peopleCount = updatedPeople.length;
                     return { ...country, name: `${country.name} [${peopleCount}]`, people: updatedPeople };
              });
       }
}

module.exports = AnimalService;

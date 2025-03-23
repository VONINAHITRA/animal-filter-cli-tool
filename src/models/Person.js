/**
 * Represents a person who owns a list of animals.
 * @class Person
 * @param {string} name - The name of the person.
 * @param {Array<Animal>} animals - A list of animals owned by the person.
 */
class Person {
       constructor(name, animals) {
              this.name = name;
              this.animals = animals;
       }
}

module.exports = Person;

/**
 * Represents a person who owns a list of animals.
 * Each person has a name and a list of Animal objects.
 */

class Person {
       constructor(name, animals) {
              this.name = name;
              this.animals = animals;
       }
}

module.exports = Person;

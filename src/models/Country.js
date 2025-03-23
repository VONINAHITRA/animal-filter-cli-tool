
/**
 * Represents a country containing a list of people.
 * Each country has a name and a list of Person objects.
 */

class Country {
       constructor(name, people) {
              this.name = name;
              this.people = people;
       }
}

module.exports = Country;
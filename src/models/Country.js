/**
 * Represents a country with a name and a list of people.
 * @class Country
 * @param {string} name - The name of the country.
 * @param {Array} people - A list of people in the country.
 */
class Country {
       constructor(name, people) {
              this.name = name;
              this.people = people;
       }
}

module.exports = Country;

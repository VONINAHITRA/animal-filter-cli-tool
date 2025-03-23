const AnimalService = require('../../src/services/AnimalService');
const AnimalRepository = require('../../src/repositories/AnimalRepository');

jest.mock('../../src/repositories/AnimalRepository');

describe('AnimalService', () => {
       it('should filter animals by name pattern', () => {
              const mockData = [
                     {
                            name: 'Dillauti',
                            people: [
                                   {
                                          name: 'Winifred Graham',
                                          animals: [
                                                 { name: 'Anoa' },
                                                 { name: 'Duck' },
                                                 { name: 'Narwhal' }
                                          ]
                                   }
                            ]
                     }
              ];

              AnimalRepository.getData.mockReturnValue(mockData);

              const result = AnimalService.filterAnimals('Duck');

              // Check if the result contains the correct number of animals
              expect(result).toHaveLength(1);
              expect(result[0].people[0].animals).toHaveLength(1);
              expect(result[0].people[0].animals[0].name).toBe('Duck');
       });

       it('should throw an error if pattern is not a string', () => {
              // Check if the correct error is thrown when the pattern is not a string
              expect(() => AnimalService.filterAnimals(123)).toThrowError('The pattern must be a string.');
       });
});

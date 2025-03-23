const AnimalService = require('../../src/services/AnimalService');
const AnimalRepository = require('../../src/repositories/AnimalRepository');
const { ERROR_PATTERN_MUST_BE_STRING } = require('../../src/utils/constante');

jest.mock('../../src/repositories/AnimalRepository'); // Mock the repository

describe('AnimalService Integration Tests', () => {

       it('should return filtered animals by pattern', () => {
              // Mock data returned by AnimalRepository
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

              // Mock the return of AnimalRepository.getData()
              AnimalRepository.getData.mockReturnValue(mockData);

              // Test the filterAnimals() method
              const result = AnimalService.filterAnimals('Duck');

              // Assertions
              expect(result).toHaveLength(1);
              expect(result[0].people[0].animals).toHaveLength(1);
              expect(result[0].people[0].animals[0].name).toBe('Duck');
       });

       it('should throw an error if pattern is not a string', () => {
              // Test error handling when the pattern is not a string
              expect(() => AnimalService.filterAnimals(123)).toThrowError(ERROR_PATTERN_MUST_BE_STRING);
       });

       it('should count entities correctly', () => {
              const mockData = [
                     {
                            name: 'Dillauti',
                            people: [
                                   {
                                          name: 'Winifred Graham',
                                          animals: [{ name: 'Duck' }]
                                   },
                                   {
                                          name: 'Harry',
                                          animals: [{ name: 'Narwhal' }]
                                   }
                            ]
                     }
              ];

              AnimalRepository.getData.mockReturnValue(mockData);

              const result = AnimalService.countEntities();

              // Assertions to check the counting of animals and people
              expect(result).toHaveLength(1);
              expect(result[0].people).toHaveLength(2);
              expect(result[0].people[0].name).toBe('Winifred Graham [1]');
              expect(result[0].people[1].name).toBe('Harry [1]');
              expect(result[0].name).toBe('Dillauti [2]');
       });
});

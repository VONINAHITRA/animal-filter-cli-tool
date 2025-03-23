const AnimalRepository = require('../../src/repositories/AnimalRepository');

// Mock the data globally before each test
jest.mock('../../data/data.js');

describe('AnimalRepository Tests', () => {

       it('should return animal data when data is valid', () => {
              const mockData = [
                     { name: 'Dillauti', people: [{ name: 'Winifred Graham', animals: [{ name: 'Duck' }] }] },
              ];

              // Mock valid data
              require('../../data/data.js').data = mockData;

              const result = AnimalRepository.getData();
              expect(result).toEqual(mockData);
       });

       it('should throw an error if data is missing or malformed', () => {
              // Mock malformed data: null data
              require('../../data/data.js').data = null;
              expect(() => AnimalRepository.getData()).toThrowError('Data is either missing or malformed');

              // Mock malformed data: invalid data
              require('../../data/data.js').data = 'invalid data';
              expect(() => AnimalRepository.getData()).toThrowError('Data is either missing or malformed');
       });
});

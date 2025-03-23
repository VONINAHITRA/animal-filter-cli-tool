const AnimalRepository = require('../../src/repositories/AnimalRepository');
const data = require('../../data/data.js'); // Mock data

jest.mock('../../data/data.js'); // Mock the data module

describe('AnimalRepository Integration Tests', () => {

       it('should return animal data when data is valid', () => {
              // Simulate valid data
              const mockData = [
                     { name: 'Dillauti', people: [{ name: 'Winifred Graham', animals: [{ name: 'Duck' }] }] },
              ];

              data.data = mockData; // Set the mock data in the data module
              const result = AnimalRepository.getData();

              // Verify that the repository returns the correct data
              expect(result).toEqual(mockData);
       });

       it('should throw an error if data is missing or malformed', () => {
              // Simulate missing or malformed data
              data.data = null;
              expect(() => AnimalRepository.getData()).toThrowError('Data is either missing or malformed');

              // Simulate invalid data format
              data.data = 'invalid data';
              expect(() => AnimalRepository.getData()).toThrowError('Data is either missing or malformed');
       });
});

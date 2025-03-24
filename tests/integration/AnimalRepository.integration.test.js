const AnimalRepository = require('../../src/repositories/AnimalRepository');
const data = require('../../data/data.js'); // Mock data
const { ERROR_INVALID_FORMAT } = require('../../src/errors/errorMessages'); // Import the error messages

jest.mock('../../data/data.js'); // Mock the data module

describe('AnimalRepository Integration Tests', () => {

       it('should return animal data when data is valid', () => {
              // Simulate valid data
              const mockData = [
                     { name: 'Dillauti', people: [{ name: 'Winifred Graham', animals: [{ name: 'Duck' }] }] },
              ];

              // Set the mock data in the data module
              data.data = mockData;

              // Call the method and verify the correct output
              const result = AnimalRepository.getData();

              // Verify that the repository returns the correct data
              expect(result).toEqual(mockData);
       });

       it('should throw an error if data is missing or malformed', () => {
              // Simulate missing or malformed data - null
              data.data = null;

              // Expecting to throw an error with the specific message
              expect(() => AnimalRepository.getData()).toThrowError(ERROR_INVALID_FORMAT);

              // Simulate invalid data format - string
              data.data = 'invalid data';

              // Expecting to throw an error with the specific message
              expect(() => AnimalRepository.getData()).toThrowError(ERROR_INVALID_FORMAT);
       });
});

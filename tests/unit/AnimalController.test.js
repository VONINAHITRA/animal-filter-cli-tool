const AnimalController = require('../../src/controllers/AnimalController');
const AnimalService = require('../../src/services/AnimalService');

jest.mock('../../src/services/AnimalService'); // Mock the AnimalService

describe('AnimalController Unit Tests', () => {

       it('should call filterAnimals and log the result', () => {
              const consoleSpy = jest.spyOn(console, 'log').mockImplementation(); // Spy on `console.log`
              const mockFilteredData = [{ name: 'Dillauti', people: [{ name: 'Winifred Graham', animals: [{ name: 'Duck' }] }] }];
              AnimalService.filterAnimals.mockReturnValue(mockFilteredData); // Mock the `filterAnimals` method

              // Call the `handleFilterRequest` method from the controller
              AnimalController.handleFilterRequest('Duck');

              // Check if `console.log` was called with the correct data
              expect(consoleSpy).toHaveBeenCalledWith(JSON.stringify(mockFilteredData, null, 2));

              consoleSpy.mockRestore(); // Restore the spy
       });

       it('should call countEntities and log the result', () => {
              const consoleSpy = jest.spyOn(console, 'log').mockImplementation(); // Spy on `console.log`
              const mockCountedData = [{ name: 'Dillauti [2]', people: [{ name: 'Winifred Graham [1]' }] }];
              AnimalService.countEntities.mockReturnValue(mockCountedData); // Mock the `countEntities` method

              // Call the `handleCountRequest` method from the controller
              AnimalController.handleCountRequest();

              // Check if `console.log` was called with the correct data
              expect(consoleSpy).toHaveBeenCalledWith(JSON.stringify(mockCountedData, null, 2));

              consoleSpy.mockRestore(); // Restore the spy
       });

});

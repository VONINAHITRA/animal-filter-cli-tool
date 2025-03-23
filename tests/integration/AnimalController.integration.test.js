const AnimalController = require('../../src/controllers/AnimalController');
const AnimalService = require('../../src/services/AnimalService');

jest.mock('../../src/services/AnimalService');

describe('AnimalController', () => {
       it('should call filterAnimals and log the result', () => {
              const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
              AnimalService.filterAnimals.mockReturnValue([/* mock filtered data */]);

              // Call the handleFilterRequest method of the controller
              AnimalController.handleFilterRequest('Duck');

              // Check if console.log was called with the correct data
              expect(consoleSpy).toHaveBeenCalledWith(JSON.stringify([/* mock filtered data */], null, 2));

              consoleSpy.mockRestore(); // Restore the spy
       });

       it('should call countEntities and log the result', () => {
              const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
              AnimalService.countEntities.mockReturnValue([/* mock counted data */]);

              // Call the handleCountRequest method of the controller
              AnimalController.handleCountRequest();

              // Check if console.log was called with the correct data
              expect(consoleSpy).toHaveBeenCalledWith(JSON.stringify([/* mock counted data */], null, 2));

              consoleSpy.mockRestore(); // Restore the spy
       });
});

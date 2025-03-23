
# Animal Filter CLI Tool 

This is a command-line tool developed in Node.js to filter and count animal data. The tool allows users to filter animals by name pattern and count the number of people and animals in a given dataset.

## Features

- **Filter Animals**: Filters a list of animals based on a name pattern.
- **Count Entities**: Counts the number of animals per person and people per country, appending the count to their names.

## Project Structure

ANIMAL-FILTER-CLI-TOOL
│── coverage/
│── data/
│   └── data.js
│── node_modules/
│── src/
│   │── controllers/
│   │   └── AnimalController.js
│   │── models/
│   │   ├── Animal.js
│   │   ├── Country.js
│   │   └── Person.js
│   │── repositories/
│   │   └── AnimalRepository.js
│   │── services/
│   │   └── AnimalService.js
│   │── utils/
│   │   └── constante.js
│── tests/
│   │── integration/
│   │   ├── AnimalController.integration.test.js
│   │   ├── AnimalRepository.integration.test.js
│   │   └── AnimalService.integration.test.js
│   │── unit/
│   │   ├── AnimalController.test.js
│   │   ├── AnimalRepository.test.js
│   │   └── AnimalService.test.js
│   ├── jest.config.js
│── app.js
│── package-lock.json
│── package.json
│── .gitignore
│── README.md


## Installation

1. Clone the repository:
    ```bash
       https://github.com/VONINAHITRA/animal-filter-cli-tool.git
    ```

2. Navigate to the project directory:
    ```bash
    cd animal-filter-cli-tool
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### 1. Filter Animals by Name Pattern

To filter animals based on a name pattern, run the following command:

```bash
node app.js --filter=<pattern>
```
For example:

```bash
node app.js --filter=ry
```
Example Output:

[
  {
    "name": "Uzuzozne",
    "people": [
      {
        "name": "Lillie Abbott",
        "animals": [
          {
            "name": "John Dory"
          }
        ]
      }
    ]
  },
  {
    "name": "Satanwi",
    "people": [
      {
        "name": "Anthony Bruno",
        "animals": [
          {
            "name": "Oryx"
          }
        ]
      }
    ]
  }
]

### 2. Count People and Animals

To print the count of people and animals in the dataset, use:

```bash
node app.js --count
```
Example Output:

[
  {
    "name": "Dillauti [5]",
    "people": [
      {
        "name": "Winifred Graham [6]",
        "animals": [
          { "name": "Anoa" },
          { "name": "Duck" },
          { "name": "Narwhal" },
          { "name": "Badger" },
          { "name": "Cobra" },
          { "name": "Crow" }
        ]
      }
    ]
  }
]

😊🚀
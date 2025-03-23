
# Animal Filter CLI Tool 💻😊🚀

This is a command-line tool developed in Node.js to filter and count animal data. The tool allows users to filter animals by name pattern and count the number of people and animals in a given dataset.

## Features 🌟

- **Filter Animals**: Filters a list of animals based on a name pattern.
- **Count Entities**: Counts the number of animals per person and people per country, appending the count to their names.

## Project Structure 📂

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


## Installation 🔧

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

## Usage 🚀

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

### 2. Tests ✅

Running Tests with Coverage

```bash
 npm test 
```

example Output:
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------|---------|----------|---------|---------|-------------------
All files             |   97.43 |    76.92 |     100 |   97.43 |
 data                 |     100 |      100 |     100 |     100 |
  data.js             |     100 |      100 |     100 |     100 |
 src/controllers      |     100 |      100 |     100 |     100 |
  AnimalController.js |     100 |      100 |     100 |     100 |
 src/repositories     |     100 |      100 |     100 |     100 |
  AnimalRepository.js |     100 |      100 |     100 |     100 |
 src/services         |   95.23 |     62.5 |     100 |   95.23 | 47
  AnimalService.js    |   95.23 |     62.5 |     100 |   95.23 | 47
 src/utils            |     100 |      100 |     100 |     100 |
  constante.js        |     100 |      100 |     100 |     100 |
----------------------|---------|----------|---------|---------|-------------------

💻😊🚀


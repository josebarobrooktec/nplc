# NPLC (Node Package License Checker)

This project is a tool that checks the licenses of the packages used in a project tha uses npm.

It checks if the licenses of the packages used in a project are safe to use in a commercial project.

It also checks if the licenses of thefiles present in the project are safe to use in a commercial project.

## Technologies Used

This project uses the following technologies:

> _- **Node.js**: The cross-platform JavaScript runtime environment. It's the base technology of the project. The version is defined on the .nvmrc file. <https://nodejs.org>_

> _- **NPM**: The package manager for JavaScript. It's used to manage the dependencies of the project. The version is defined on the package.json file. <https://www.npmjs.com>_

> _- **license-checker**: A tool that checks the licenses of the packages used in a project. <https://www.npmjs.com/package/license-checker>_

> _- **chalk**: A tool that allows the use of colors in the console. <https://www.npmjs.com/package/chalk>_


## Code Structure

Main files and directories of the project:

> _- **index.js**: The main file of the project. It's the file that is executed when the project is run._

> _- **src/lib**: The directory that contains the files with the functions that are used in the project._

> _- **src/constants**:  The directory that contains the files with the constants that are used in the project._

> _- **.nplcrc.json**: The file that contains a sample configuration file for the project._

## Usage

To use the project, follow the steps below:

### Check licenses

`npx nplc`

### Init and check licenses

`npx nplc --init`

It will create a `.nplcrc.json` file in the root of the project.

### Show help

`npx nplc --help`

### Show allowed licenses

`npx nplc --show-licenses`

## Deployment

To deploy the project, follow the steps below:

### Install the dependencies

`npm install`

### Run the project

`node ./index.js`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


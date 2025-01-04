# TodoMVC Test Automation with Playwright

This repository contains an automated UI test suite for the TodoMVC application, implemented using Playwright. The suite validates core functionalities such as adding, completing, and deleting to-do items. Additionally, it captures screenshots and video recordings during test execution and generates detailed reports using Allure.

## Prerequisites

Before you begin, ensure the following are installed on your system:

1. **Node.js** (v16 or higher): [Download Node.js](https://nodejs.org/)
2. **Allure Commandline** (for generating test reports): Install instructions provided below.
3. **Git** (optional, for cloning the repository): [Download Git](https://git-scm.com/)

## Installation

1. **Clone the Repository**:
   Clone this repository to your local machine:
   ```bash
   git clone <your-repository-url>
   cd <your-repository-folder>

2. Install Dependencies: Run the following command to install all required packages, including Playwright:
   ```bash
   npm install
   
3. Install Browsers: Ensure the Playwright browsers are installed:
   ```bash
   npx playwright install
   
4. Install Allure Commandline: Install the Allure Commandline tool globally:

      ```bash
      npm install -g allure-commandline --save-dev
   
   Verify the installation:
   allure --version

  ## Running the Tests
  1. To execute the test suite, use the following command:
     ```bash
     npx playwright test
     This command runs all tests defined in the project and outputs the results in the console.

## Generating and Viewing Allure Reports
 1. Run Tests with Allure Reporting: Execute the tests and generate Allure test results:
    ```bash
    npx playwright test --reporter=allure-playwright     
 2. Generate the Allure Report: After running the tests, generate the Allure report using the following command:
    ```bash
     allure generate ./allure-results -o ./allure-report --clean
    
     ./allure-results: The directory where Playwright outputs the test results.
     ./allure-report: The directory where the generated report will be stored.
     --clean: Ensures that the target directory is cleared before generating the report.
    
 3. Open the Allure Report: To view the generated report in your browser, run:
    ```bash
    allure open ./allure-report
This opens the generated report in your default browser.

## Capturing Screenshots and Videos
Screenshots:  Automatically captured at key stages of each test and saved in the screenshots/ directory.

Video Recordings:  Captured for each test execution and saved in the videos/ directory.

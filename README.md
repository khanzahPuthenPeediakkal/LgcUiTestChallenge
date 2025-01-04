# LgcUiTestChallenge
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

To execute the test suite, use the following command:
  ```bash
  npx playwright test
This command runs all tests defined in the project and outputs the results in the console. 

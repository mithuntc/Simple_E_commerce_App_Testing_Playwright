****Automated E-commerce Add to Cart Functionality Testing****

This project provides an automated testing solution to validate the "Add to Cart" and related functionalities of an e-commerce application using Playwright. The tests are designed to ensure a seamless user experience from adding products to the cart to navigating to the payment page.
----------------------------------------------------------------------------------------------------------------------------------------------------
Features
**Add to Cart**: Automates the process of adding a product to the shopping cart.

**Cart Section Navigation**: Tests navigation to the cart page after adding an item.

**Payment Page**: Verifies that the user can successfully proceed to the payment page.

--------------------------------------------------------------------------------------------------------------------------------------------------------

Prerequisites
To run these tests, you will need the following installed on your machine:

**Node.js: The latest version is recommended**.

**Visual Studio Code: As the IDE for running the project**.
----------------------------------------------------------------------------------------------------------------------------------------------------------
Setup and Execution
Follow these steps to set up and run the automated tests:

1. Set Up the E-commerce Application
First, you need to set up the e-commerce application that will be tested.

Clone the Repository:

git clone https://bitbucket.org/dredsoft-labs/ecommerce/src/main/
Install Dependencies:
Navigate to the cloned directory and install the necessary dependencies. You might need to use the --legacy-peer-deps flag.

cd ecommerce
npm install
or

npm install react-material-ui-carousel --save --legacy-peer-deps

Start the Server:
Run the following command to start the application server.

npm start
The application will be accessible at http://localhost:3000.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Set Up the Automation Repository
Now, set up the testing framework.

Clone the Automation Repository:

git clone https://github.com/mithuntc/Simple_E_commerce_App_Testing_Playwright.git
Install Dependencies:
Navigate to the cloned directory and install the Playwright dependencies.


cd Simple_E_commerce_App_Testing_Playwright
npm install
3. Run the Tests
With both repositories set up, you can now execute the tests.

Run the Test Command:
Use the following command to run the tests in a visible browser.
npx playwright test --headed
A browser window will open, and you will see the automated tests in action.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Screenshot functionality has also been added for visual testing.

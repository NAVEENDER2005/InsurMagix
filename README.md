Authorization Management API is a backend service designed to manage authorization requests for insurance policies. This API allows clients to submit authorization data securely, ensuring all required information is validated and stored effectively. Built with Node.js and Express, it provides a robust solution for handling insurance authorizations.

Features include the ability to create authorization requests by submitting required details, data validation to ensure compliance with insurance company standards, comprehensive error handling with detailed messages for debugging, logging of all requests and responses for auditing, and security best practices.

Technologies used in this project include Node.js, Express.js, MongoDB, Mongoose, dotenv, and Jest for unit testing.

To install the project, ensure you have Node.js and MongoDB running. Clone the repository, navigate to the directory, install dependencies using npm install, configure your environment variables in a .env file with the necessary PORT and MONGO_URI, and then start the server with npm start.

The main API endpoint is /api/save-authorization which accepts POST requests. The request body should include fields such as insuranceCompany, policyId, insuredPersonalId, authorizedAmount, priorityStatus, address, email, phoneNumber, and fullName. On successful submission, the API responds with a success message. If there are errors due to missing required fields, it provides detailed error messages.

The API includes robust error handling for validation, returning detailed messages if required fields are missing or invalid, which helps improve the developer experience.

Testing is implemented using Jest. To run the tests, execute npm test to check all test cases.

Contributions are welcome! To contribute, fork the repository, create a new branch for your feature, make changes and commit them, push to the branch, and open a pull request.

This project is licensed under the MIT License. For any inquiries or support, please contact Navvender M at naveender2005@gmail.com.








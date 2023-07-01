🐾 Mithoo Pet Shop 🐾

Welcome to the Mithoo Pet Shop GitHub repository! Mithoo is an e-commerce website where users can explore and purchase a wide range of pet accessories, pet animals, and even adopt pets. The website also includes a feature to report missing pets, ensuring the community stays connected and can help reunite lost pets with their owners. 

## 🛠️ Tech Stack

The Mithoo Pet Shop website is built using the MERN stack:

- MongoDB: NoSQL database for storing pet details, user information, and reports.
- Express.js: Server-side framework for building RESTful APIs.
- React: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime for running the server-side code.
- Redux: State management library for managing global application state.
- Cron: Library for scheduling and executing cron jobs.

## 📁 Project Structure

The project follows the MVC (Model-View-Controller) folder structure:

- `controllers/`: Contains the controllers responsible for handling API requests and business logic.
- `models/`: Defines the Mongoose models for interacting with the MongoDB database.
- `routes/`: Defines the API routes for different resources.
- `views/`: Contains the views and templates for rendering HTML pages (server-side rendering).
- `client/`: Contains the client-side code, including React components, styles, and Redux state management.
- `cron/`: Includes the cron job setup and related utilities.

## 📩 Sending Missing Pets Reports

Mithoo Pet Shop utilizes cron jobs to send monthly missing and stolen pets reports to registered users. The cron job is scheduled to run every month and fetches the required data from the database. The reports are generated in HTML format and sent to the registered users' email addresses. The email includes comprehensive details about the missing and stolen pets for that month.

## 🌐 Visit Our Website

Visit our website here: [www.mithoo.com.pk](https://www.mithoo.com.pk)

We hope you enjoy exploring the Mithoo Pet Shop website! If you have any questions or suggestions, please feel free to reach out.
 
 

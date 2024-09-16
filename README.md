# Front-End Test - Anota AI <img src="https://githubanotaai.github.io/frontend-interview-mock-data/assets/favicon.png" />

This project was developed as part of the selection process for a front-end developer position at Anota AI, using **Angular 17**.

## Objective 📌

The objective of this test is to evaluate technical skills in Angular 2+ and the ability to translate a visual design into a functional web page, with attention to details and front-end best practices.

## Tasks Completed ✔️

The project includes the following features:

1. **Angular 17 workspace creation**.
2. **Development of the page header**.
3. **Card listing**, fetching data from a REST API:
   - API URL: `https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json`
   - Card types:
     - Type 1: **Paisagem**
     - Type 2: **Flor**
     - Type 3: **Pizza**
4. **Delete card option**: Each card includes a delete button that removes it from the list.
5. **Search field**: Allows users to filter the cards by title or description.

## Additional Features

- **Toast Notifications**: The application displays toast notifications for important actions such as card deletion and filtering.
- **Data Persistence with localStorage**: The fetched JSON data from the API is stored in `localStorage` for persistent access, even after refreshing the page. This was implemented using a custom **service** that handles API requests and localStorage operations.

## Github Pages

This project is also available on GitHub Pages. If you don't want to download and run the project locally, you can access it online at the following URL: https://paullo97.github.io/AnotaAi-test/

## Instructions to Run the Project

### Prerequisites

- Node.js and NPM installed.
- Angular CLI installed globally.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/paullo97/AnotaAi-test.git
   ```

2. Navigate to the project directory
  ```
    cd AnotaAi-test
  ```

3. Install the dependencies
  ```
    npm install
  ```

4. Start the development server
  ```
    ng serve
  ```

5. Open the application in your browser
  ```
    http://localhost:4200
  ```

### Project Structure 

The project is organized into several key directories:

- **src**: Root directory containing the main application code.
  - **app**: This directory contains the core structure of the Angular application.
    - **components**: Contains all reusable components such as the header and card list components.
    - **core**: 
      - **model**: This folder houses the system's data models, which define the structure of the application's entities.
      - **services**: Contains service files, which are responsible for various functionalities, such as:
        - **localStorageService**: Manages storing and retrieving data from `localStorage`.
        - **dataService**: Handles fetching card data from the JSON API.
        - **toastService**: Provides toast notifications for important user actions.
  - **assets**: 
    - **colors.scss**: This file contains the system's color variables, making it easy to manage and maintain a consistent color scheme.
    - **icons**: This folder holds the system's icons and images, used throughout the application.

## Features
- Card List: Displays a list of cards with data fetched from the API.
- Delete Cards: Allows users to delete cards from the list.
- Search: Filters the list of cards based on the title or description.
- Toast Notifications: Feedback notifications are shown after important actions, like deleting a card or applying a filter.
- Local Storage: The application stores the fetched card data in localStorage to maintain the list even after page reloads.

## Technologies Used
- Angular 17
- CSS (without the use of frameworks like Bootstrap or Angular Material)
- HTTPClientModule for HTTP requests.
- localStorage for data persistence.

## Final Considerations
This test was developed following the guidelines of the briefing, without using any external libraries for styling the page or data manipulation. The layout was entirely built using pure CSS, organized with a known CSS architecture/methodology.

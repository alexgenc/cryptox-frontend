# CryptoX - FrontEnd

## About the Project
CryptoX is a cryptocurrency web application that displays market information for cryptocurrencies. Market information can be viewed for the span of last 24 hours, 7 days and 1 year to get a better understanding of market trends. 

[Live Demo](https://alexgenc-cryptox.netlify.app/#/)

## Features

- Sign Up
- Sign In
- Main cryptocurrency page / Homepage
- Specific cryptocurrency page / historical data / latest market information
- Add/remove cryptocurrencies to watchlist (for logged in users)
- Add/remove cryptocurrencies and quantities to portfolio (for logged in users)
- Profile and settings page (for logged in users)

## Folder Structure 

```sh
CryptoX/
├──frontend
  ├──src
    ├── __tests__      # All test files (components, pages, helpers)
    ├── assets         # Media assets
    ├── components     # Reusable parts
    ├── constants      # Reusable constant values
    ├── context        # Global data contexts
    ├── helpers        # Reusable helper functions
    ├── hooks          # Custom hooks
    ├── pages          # Application views
    ├── services       # Reusable backend and API access methods
    ├── utils          # Utility functions
├──backend
    ├── helpers        # Reusable helper functions
    ├── middleware     # Convenience middleware 
    ├── models         # Model setups
    ├── routes         # Route setups
    ├── schemas        # Schema configurations
```


## Built With

The coding languages, frameworks, and libraries that were used on this project:

Frontend
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Tailwind](https://tailwindcss.com/)
* [Material-UI](https://material-ui.com/)
* HTML
* CSS
* [Axios](https://www.npmjs.com/package/axios)

Backend
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Node-PostgreSQL](https://node-postgres.com/)
* [JSON Web Tokens](https://jwt.io/)
* [JSON Schema](https://json-schema.org/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

## How to Run the Project

To get a local copy up and running follow these steps:

### Clone Repos

1. Clone the frontend repo repo to a separate directory by going to [https://github.com/alexgenc/cryptox-frontend](https://github.com/alexgenc/cryptox-frontend). From there, click Download Zip again from the green Code button at the top of the page or enter the following in a separate directory in your terminal:
  
   ```sh
   git clone https://github.com/alexgenc/cryptox-frontend.git
   ```
2. Clone the backend repo to a separate directory by going to [https://github.com/alexgenc/cryptox-backend](https://github.com/alexgenc/cryptox-backend). From there, click Download Zip again from the green Code button at the top of the page or enter the following in a separate directory in your terminal:
   
   ```sh
   git clone https://github.com/alexgenc/cryptox-backend.git
   ```

### Library Installations

3. After cloning each repo (and unzipping if downloaded), install the libraries in each frontend and backend repo.

    ```sh
    npm install
    ```

### Postgres Installation

4. Install [Postgres](https://www.postgresql.org/).

5. Create a database named "cryptox" in your terminal in the backend directory.
    
    ```sh
    createdb cryptox
    ```

### Seed Data to Database 

6. Run the following command in your terminal in the backend directory to create the database tables and seed products to database.
    
    ```sh
    psql -f cryptox.sql
    ```

7. Start servers in both frontend and backend directories and you are done!
    
    ```sh
    npm start
    ```

## Potential Feature Ideas

- Forgot password
- Reset password
- Email verification
- Cryptocurrency Search
- Live notifications

## Contact

Alex Genc - alexgenc@gmail.com - [Linkedin](https://www.linkedin.com/in/alexgenc/)

Project Links: <br/>
[Live Demo](https://alexgenc-cryptox.netlify.app/#/)
[Frontend Repo](https://github.com/alexgenc/cryptox-frontend) <br/>
[Backend Repo](https://github.com/alexgenc/cryptox-backend)



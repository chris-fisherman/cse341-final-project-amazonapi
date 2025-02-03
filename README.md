# CSE341 Final Project - Amazon API

This is an API to replicate the basic functionality of Amazon. This will include four collections: users, categories, products, and orders.

## Instructions on how to run the application locally

**1.** After you have cloned the repository to your local computer, run the installation command `npm install`

```
npm install
```

**2.** Create the .env file in the root of the project and add the `MONGODB_URL` variable with the MongoDB database connection string

```
MONGODB_URL = <connection_string>
```

**3.** Once the dependencies are installed and the .env file is created, run the development command `npm start`

```
npm start
```

## Functions of each folder

- controllers/ - Functions and logic of each endpoint
- data/ - Connection to MongoDB
- helpers/ - Validation helper
- middlewares/ - Authentication and validation rules
- requests/ - HTTP requests tests
- routes/ - API routes

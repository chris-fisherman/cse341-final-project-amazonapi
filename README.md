# CSE341 Final Project - Amazon API

This is an API to replicate the basic functionality of Amazon. This will include four collections: users, categories, products, and orders.

## 📝Instructions on how to run the application locally

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

## 🗂️Functions of each folder

- controllers/ - Functions and logic of each endpoint
- data/ - Connection to MongoDB
- helpers/ - Validation helper
- middlewares/ - Authentication and validation rules
- requests/ - HTTP requests tests
- routes/ - API routes

## 📜Rules for development

- Always keep the main branch clean of errors and console.log
- Have a develop branch before the main branch so as not to break our main branch
- Create a working branch like nestor-adding-auth
- Use single quotation ' in the strings
- Use 2 spaces for the tab
- Name variables like variableName
- Use sync await to resolve promises
- Use arrow functions `const aFunction () => {}` whenever possible

## 📆Scheduling and Delegation

### Week 05 (Feb/03 - Feb/08)

- [x] Create GitHub repo and init node project (**Christian Peraza**)
- [x] Connect to MongoDB and deploy on Render (**Christian Peraza**)
- [ ] **Users** collection with all CRUD operations (**Ignacio Marenco**)
- [ ] Error handling to **Users** collection (**Ignacio Marenco**)
- [ ] **Categories** collection with all CRUD operations (**Nestor Otondo**)
- [ ] Error handling to **Categories** collection (**Nestor Otondo**)
- [ ] API Swagger documentation to **Users** and **Categories** collections (**Christian Peraza**)

### Week 06 (Feb/10 - Feb/15)

- [ ] **Products** collection with all CRUD operations (**Ignacio Marenco**)
- [ ] Error handling to **Products** collection (**Ignacio Marenco**)
- [ ] **Orders** collection with all CRUD operations (**Nestor Otondo**)
- [ ] Error handling to **Orders** collection (**Nestor Otondo**)
- [ ] API Swagger documentation to **Products** and **Orders** collections (**Christian Peraza**)
- [ ] Validation to **Users** and **Products** collections on POST and PUT endpoints (**Ignacio Marenco**)
- [ ] Validation to **Categories** and **Orders** collections on POST and PUT endpoints (**Nestor Otondo**)
- [ ] Implement OAuth and secure at least two
      collections' POST and PUT endpoints
      behind authorization (**Christian Peraza**)
- [ ] Write at least four unit tests your GET
      endpoints in each collection (**Christian Peraza**)

### Week 07 (Feb/17 - Feb/19)

- [ ] Record the video demostration less than 8 minutes (**Team**)

# CSE341 Final Project - Amazon API

This is an API to replicate the basic functionality of Amazon. This will include four collections: users, categories, products, and orders.

## 📝Instructions on how to run the application locally

**1.** Run the installation command `npm install`

```
npm install
```

**2.** Once the dependencies are installed, run the development command `npm run dev`

```
npm run dev
```

> [!NOTE]
> The .env file needs the variables `DB_STRING` and `DB_NAME`

## 🟢Running swagger.js

To create a new swagger.json, run the code `npm run swagger`

```
npm run swagger
```

## 🧪Testing

To test all get endpoints, run this code `npm test`

```
npm test
```

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
- [x] **Users** collection with all CRUD operations (**Ignacio Marenco**)
- [x] Error handling to **Users** collection (**Ignacio Marenco**)
- [x] **Categories** collection with all CRUD operations (**Nestor Otondo**)
- [x] Error handling to **Categories** collection (**Nestor Otondo**)
- [x] API Swagger documentation to **Users** and **Categories** collections (**Christian Peraza**)

### Week 06 (Feb/10 - Feb/15)

- [x] **Products** collection with all CRUD operations (**Ignacio Marenco**)
- [x] Error handling to **Products** collection (**Ignacio Marenco**)
- [x] **Orders** collection with all CRUD operations (**Nestor Otondo**)
- [x] Error handling to **Orders** collection (**Nestor Otondo**)
- [x] API Swagger documentation to **Products** and **Orders** collections (**Christian Peraza**)
- [ ] Validation to **Users** and **Products** collections on POST and PUT endpoints (**Ignacio Marenco**)
- [ ] Validation to **Categories** and **Orders** collections on POST and PUT endpoints (**Nestor Otondo**)
- [x] Implement OAuth and secure at least two
      collections' POST and PUT endpoints
      behind authorization (**Ignacio Marenco**)
- [x] Write at least four unit tests your GET
      endpoints in each collection (**Christian Peraza**)

### Week 07 (Feb/17 - Feb/19)

- [ ] Record the video demostration less than 8 minutes (**Team**)

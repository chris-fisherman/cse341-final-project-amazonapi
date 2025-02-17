/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
require('dotenv').config();

// connect to database
beforeAll(async () => {
  await mongoose.connect(process.env.DB_STRING, {
    dbName: process.env.DB_NAME
  });
});
// disconnect to database
afterAll(async () => {
  await mongoose.disconnect();
});

/*****************************/
/*** GET ALL CATEGORIES ***/
/*****************************/
describe('GET /categories', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/categories').send();
  });

  it('should respond with a 200 status code', async () => {
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });

  it('if the path is wrong, it should respond with a 404 status code', async () => {
    response = await request(app).get('/category');
    expect(response.status).toBe(404);
  });

  it('should return an array of categories', async () => {
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should have at least 1 category', async () => {
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});

/*****************************/
/*** GET A SINGLE CATEGORY ***/
/*****************************/
describe('GET /categories/:id', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/categories/67a3ed06b964a22ecccaa843').send();
  });

  it('should respond with a 200 status code', async () => {
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });

  it('if the id is wrong, it should respond with a 400 status code', async () => {
    response = await request(app).get('/categories/1234567890');
    expect(response.status).toBe(400);
  });

  it('should have all properties defined', async () => {
    expect(response.body._id).toBeDefined();
    expect(response.body.name).toBeDefined();
    expect(response.body.description).toBeDefined();
    expect(response.body.createdAt).toBeDefined();
    expect(response.body.updateAt).toBeDefined();
  });

  it('should return an object of a single category', async () => {
    expect(response.body).toBeInstanceOf(Object);
  });
});

/*****************************/
/*** GET ALL USERS ***/
/*****************************/
describe('GET /users', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/users').send();
  });

  it('should respond with a 200 status code', async () => {
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });

  it('if the path is wrong, it should respond with a 404 status code', async () => {
    response = await request(app).get('/user');
    expect(response.status).toBe(404);
  });

  it('should return an array of users', async () => {
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should have at least 1 user', async () => {
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});

/*****************************/
/*** GET A SINGLE USER ***/
/*****************************/
describe('GET /users/:id', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/users/67a5d5122532b5228ce9c5c0').send();
  });

  it('if the authorization is not defined, respond with a 401 status code', async () => {
    expect(response.headers['authorization']).not.toBeDefined();
    expect(response.status).toBe(401);
  });

  it('if the id is wrong, it should respond with a 401 status code', async () => {
    response = await request(app).get('/users/1234567890');
    expect(response.status).toBe(401);
  });

  it('should return a message if missing authorization', async () => {
    expect(response.body).toMatchObject({
      message: "Cannot read properties of null (reading 'payload')"
    });
  });

  it('should return an object of a single user', async () => {
    expect(response.body).toBeInstanceOf(Object);
  });
});

/*****************************/
/*** GET ALL PRODUCTS ***/
/*****************************/
describe('GET /products', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/products').send();
  });

  it('should respond with a 200 status code', async () => {
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });

  it('if the path is wrong, it should respond with a 404 status code', async () => {
    response = await request(app).get('/product');
    expect(response.status).toBe(404);
  });

  it('should return an array of products', async () => {
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should have at least 1 product', async () => {
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});

/*****************************/
/*** GET A SINGLE PRODUCT ***/
/*****************************/
describe('GET /products/:id', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/products/67af3603a2133ec7f49210fd').send();
  });

  it('if the authorization is defined, respond with a 200 status code', async () => {
    expect(response.headers['authorization']).not.toBeDefined();
    expect(response.status).toBe(200);
  });

  it('if the id is wrong, it should respond with a 400 status code', async () => {
    response = await request(app).get('/products/1234567890');
    expect(response.status).toBe(400);
  });

  it('should return the messages', async () => {
    expect(response.body).toMatchObject({
      _id: '67af3603a2133ec7f49210fd',
      categoryId: '67a3ed06b964a22ecccaa843',
      description: 'Phone',
      image: 'any',
      rating: 8.6,
      title: 'Samsung Galaxy A13',
      userId: '67a5d5122532b5228ce9c5c0'
    });
  });

  it('should return an object of a single product', async () => {
    expect(response.body).toBeInstanceOf(Object);
  });
});

/*****************************/
/*** GET ALL ORDERS ***/
/*****************************/
describe('GET /orders', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/orders').send();
  });

  it('should respond with a 200 status code', async () => {
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });

  it('if the path is wrong, it should respond with a 404 status code', async () => {
    response = await request(app).get('/order');
    expect(response.status).toBe(404);
  });

  it('should return an array of orders', async () => {
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should have at least 1 order', async () => {
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});

/*****************************/
/*** GET A SINGLE ORDER ***/
/*****************************/
describe('GET /orders/:id', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/orders/67af3fa49a558a1b082e12f6').send();
  });

  it('should respond with a 200 status code', async () => {
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });

  it('if the id is wrong, it should respond with a 400 status code', async () => {
    response = await request(app).get('/orders/1234567890');
    expect(response.status).toBe(400);
  });

  it('should have all properties defined', async () => {
    expect(response.body._id).toBeDefined();
    expect(response.body.user_id).toBeDefined();
    expect(response.body.products).toBeDefined();
    expect(response.body.products[0].product_id).toBeDefined();
    expect(response.body.products[0].quantity).toBeDefined();
    expect(response.body.products[0].price).toBeDefined();
    expect(response.body.totalAmount).toBeDefined();
    expect(response.body.status).toBeDefined();
    expect(response.body.shippingAddress).toBeDefined();
    expect(response.body.shippingAddress.street).toBeDefined();
    expect(response.body.shippingAddress.city).toBeDefined();
    expect(response.body.shippingAddress.state).toBeDefined();
    expect(response.body.shippingAddress.country).toBeDefined();
    expect(response.body.shippingAddress.zip).toBeDefined();
    expect(response.body.createdAt).toBeDefined();
    expect(response.body.updateAt).toBeDefined();
  });

  it('should return an object of a single order', async () => {
    expect(response.body).toBeInstanceOf(Object);
  });
});

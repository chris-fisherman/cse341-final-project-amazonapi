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

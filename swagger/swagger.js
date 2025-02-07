const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Amazon API',
    description:
      'This is an Amazon API to the final team project for the CSE 341 Web Services course.'
  },
  host: 'localhost:8080',
  schemes: ['http', 'https']
};

const outputFile = '../swagger/swagger.json';
const endpointsFiles = ['../routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

const request = require('supertest');
const app = require('./app');

describe('Basic server tests', () => {
  it('should respond to root route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, CI/CD World!');
  });

  it('should have a health check endpoint', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'healthy' });
  });
});
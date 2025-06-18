const axios = require('axios');
const BASE = 'https://demoqa.com';

let userId;
let token;

const validUser = {
  userName: 'user_' + Math.random().toString(36).substring(2, 8),
  password: 'Test@12345'
};

describe('Task 1: demoqa.com API tests', () => {
  test('Create user - success', async () => {
    const res = await axios.post(`${BASE}/Account/v1/User`, validUser);
    expect(res.status).toBe(201);
    userId = res.data.userID;
  });

  test('Create user - empty password', async () => {
    try {
      await axios.post(`${BASE}/Account/v1/User`, { ...validUser, password: "" });
    } catch (e) {
      expect(e.response.status).toBe(400);
    }
  });

  test('Generate token - success', async () => {
    const res = await axios.post(`${BASE}/Account/v1/GenerateToken`, validUser);
    expect(res.status).toBe(200);
    token = res.data.token;
    expect(token).toBeDefined();
  });

  test('Generate token - invalid password', async () => {
    try {
      await axios.post(`${BASE}/Account/v1/GenerateToken`, {
        userName: validUser.userName,
        password: "wrongpass"
      });
    } catch (e) {
      expect(e.response.status).toBe(400);
    }
  });

  test('Authorize user before GET/DELETE', async () => {
    const res = await axios.post(`${BASE}/Account/v1/Authorized`, validUser);
    expect(res.status).toBe(200);
    expect(res.data).toBe(true);
  });

  test('Get user info - success', async () => {
    const res = await axios.get(`${BASE}/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    expect(res.status).toBe(200);
    expect(res.data.username).toBe(validUser.userName);
  });

  test('Get user info - non-existent', async () => {
    try {
      await axios.get(`${BASE}/Account/v1/User/fake-id`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (e) {
      expect(e.response.status).toBe(401);
    }
  });

  test('Delete user - success', async () => {
    const res = await axios.delete(`${BASE}/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    expect(res.status).toBe(204);
  });

  test('Delete user - non-existent', async () => {
    try {
      await axios.delete(`${BASE}/Account/v1/User/non-existent`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (e) {
      expect(e.response.status).toBe(401);
    }
  });
});

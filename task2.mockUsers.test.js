const axios = require('axios');
const nock = require('nock');

const BASE = 'https://api.example.com';
const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  username: "johndoe",
  phone: "+1-555-123-4567",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipcode: "10001",
    country: "USA"
  },
  company: {
    name: "Doe Enterprises",
    industry: "Technology",
    position: "Software Engineer"
  },
  dob: "1990-05-15",
  profile_picture_url: "https://example.com/images/johndoe.jpg",
  is_active: true,
  created_at: "2023-01-01T12:00:00Z",
  updated_at: "2023-10-01T12:00:00Z",
  preferences: {
    language: "en",
    timezone: "America/New_York",
    notifications_enabled: true
  }
};

describe('Task 2: Mocked /users/:id API tests', () => {
  beforeAll(() => {
    nock(BASE)
      .get('/users/1').reply(200, mockUser);

    nock(BASE)
      .get('/users/2').reply(204);

    nock(BASE)
      .get('/users/3').reply(403, {
        error: "Forbidden",
        details: "You are not allowed to access this resource."
      });

    nock(BASE)
      .get('/users/4').reply(404, {
        error: "Not Found",
        details: "User does not exist."
      });

    nock(BASE)
      .get('/users/5').reply(502, {
        error: "Bad Gateway",
        details: "Upstream server error."
      });
  });

  test('200 OK - Validate structure', async () => {
    const res = await axios.get(`${BASE}/users/1`);
    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(mockUser);
    expect(typeof res.data.id).toBe('number');
    expect(typeof res.data.email).toBe('string');
    expect(res.data.preferences).toHaveProperty('notifications_enabled');
  });

  test('204 No Content', async () => {
    const res = await axios.get(`${BASE}/users/2`);
    expect(res.status).toBe(204);
    expect(res.data).toEqual('');
  });

  test('403 Forbidden - error response', async () => {
    try {
      await axios.get(`${BASE}/users/3`);
    } catch (e) {
      expect(e.response.status).toBe(403);
      expect(e.response.data).toHaveProperty('error', 'Forbidden');
      expect(e.response.data).toHaveProperty('details');
    }
  });

  test('404 Not Found - error response', async () => {
    try {
      await axios.get(`${BASE}/users/4`);
    } catch (e) {
      expect(e.response.status).toBe(404);
      expect(e.response.data.error).toBe('Not Found');
    }
  });

  test('502 Bad Gateway - error response', async () => {
    try {
      await axios.get(`${BASE}/users/5`);
    } catch (e) {
      expect(e.response.status).toBe(502);
      expect(e.response.data).toHaveProperty('error', 'Bad Gateway');
    }
  });
});

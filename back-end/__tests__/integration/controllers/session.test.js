import request from 'supertest';
import * as Yup from 'yup';
import app from '../../../src/app';

import User from '../../../src/app/models/User';

describe('Session', () => {
  it('should be able to register', async () => {
    const user = await User.create({
      name: 'Lucas Massi',
      email: 'lucas@massi.com.br',
      state: 'CA',
      password: '123456',
    });

    await request(app)
      .post('/users')
      .send({ user });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.body).toHaveProperty('token');
  });
});

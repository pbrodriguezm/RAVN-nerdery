import express, { Router } from 'express'
import request from 'supertest'

import logger, { expressLogger } from '../infrastructure/logger'
import { app } from '../../src/infrastructure/express-server/server'

beforeAll(() => {
  process.env.NODE_ENV = 'development'
})

describe('Test status server online', () => {
  it('Request /status Time!', async () => {
    const result = await request(app).get('/api/v1/status').send()
    expect(result.status).toBe(200)
  })
})

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { SlugsController } from './slugs.controller';
import { SlugsService } from './slugs.service';

describe('SlugsController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlugsController],
      providers: [SlugsService],
    }).compile();

    app = module.createNestApplication();

    await app.init();
  });

  it('should return 200', async () => {
    const response = await request(app.getHttpServer()).get('/slug/');

    expect(response.status).toBe(200);
  });
  it('should return 201', async () => {
    const response = await request(app.getHttpServer()).post('/slug').send({
      originalString: 'hello world',
    });

    expect(response.status).toBe(201);
  });
  it('should return 200', async () => {
    await request(app.getHttpServer()).post('/slug').send({
      originalString: 'hello world',
    });
    const response = await request(app.getHttpServer()).get('/slug/1');

    expect(response.status).toBe(200);
  });
  it('should return 200', async () => {
    await request(app.getHttpServer()).post('/slug').send({
      originalString: 'hello world',
    });
    const response = await request(app.getHttpServer()).delete('/slug/1');

    expect(response.status).toBe(200);
  });
});

/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ComputadorService } from './computer.service';

describe('ComputadorService', () => {
  let service: ComputadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComputadorService],
    }).compile();

    service = module.get<ComputadorService>(ComputadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

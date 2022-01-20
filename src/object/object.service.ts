import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fort } from './entities/fort.entity';
import { Location } from './entities/location.entity';

@Injectable()
export default class ObjectService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    @InjectRepository(Fort)
    private readonly fortRepository: Repository<Fort>,
  ) {}

  async getLocations() {
    return await this.locationRepository.find({
      relations: ['fort'],
    });
  }
}

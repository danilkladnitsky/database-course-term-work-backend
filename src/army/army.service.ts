/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Army } from './entities/army.entity';
@Injectable()
export class ArmyService {
  constructor(
    @InjectRepository(Army) private readonly armyRepository: Repository<Army>,
  ) {}

  async saveArmy(data: Army) {
    return await this.armyRepository.save(data);
  }
}

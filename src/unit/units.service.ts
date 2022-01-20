import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './entity/unit.entity';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unit) private readonly unitRepository: Repository<Unit>,
  ) {}
  async getUnitsByFraction(fractionName: string) {
    return await this.unitRepository.find({
      relations: ['fraction'],
      where: { fraction: { name: fractionName } },
    });
  }
}

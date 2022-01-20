import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArmyService } from 'src/army/army.service';
import { Fraction } from 'src/fraction/entities/fraction.entity';
import { Repository } from 'typeorm';
import { History } from './entities/history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
    @InjectRepository(Fraction)
    private readonly fractionRepository: Repository<Fraction>,
    private readonly armyService: ArmyService,
  ) {}

  async saveHistory({ data }) {
    const fraction1 = await this.fractionRepository.findOne({
      where: { name: data.army1.fraction.name },
    });

    const fraction2 = await this.fractionRepository.findOne({
      where: { name: data.army2.fraction.name },
    });

    const army1 = { ...data.army1, fraction: fraction1 };
    const army2 = { ...data.army2, fraction: fraction2 };

    await this.armyService.saveArmy(army1);
    await this.armyService.saveArmy(army2);

    this.historyRepository.save({
      fraction1: fraction1,
      fraction2: fraction2,
      army1,
      army2,
      location: data.location,
    });
  }
}

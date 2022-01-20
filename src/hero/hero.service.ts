import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './entity/hero.entity';

@Injectable()
export default class HeroService {
  constructor(
    @InjectRepository(Hero) private readonly heroRepository: Repository<Hero>,
  ) {}

  async getHeroByFraction(fractionName: string) {
    return await this.heroRepository.find({
      relations: ['fraction', 'ability', 'artifact'],
      where: { fraction: { name: fractionName } },
    });
  }
}

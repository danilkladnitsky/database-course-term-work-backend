import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import HeroService from './hero.service';

@ApiTags('heroes')
@Controller('heroes')
export default class HeroController {
  constructor(private readonly heroService: HeroService) {}
  @Get('getByFraction/:fraction')
  getHeroByFraction(@Param('fraction') fraction: string) {
    return this.heroService.getHeroByFraction(fraction);
  }
}

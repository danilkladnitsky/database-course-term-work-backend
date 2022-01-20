import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UnitsService } from './units.service';

@ApiTags('units')
@Controller('units')
export class UnitsController {
  constructor(private readonly unitService: UnitsService) {}

  @Get('getByFraction/:fraction')
  async getUnitsByFraction(@Param('fraction') fraction: string) {
    return this.unitService.getUnitsByFraction(fraction);
  }
}

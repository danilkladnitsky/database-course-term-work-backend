import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from './entity/unit.entity';
import { UnitsController } from './units.controller';
import { UnitsService } from './units.service';

@Module({
  imports: [TypeOrmModule.forFeature([Unit])],
  controllers: [UnitsController],
  providers: [UnitsService],
})
export class UnitsModule {}

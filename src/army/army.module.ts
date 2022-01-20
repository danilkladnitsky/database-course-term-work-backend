import { ArmyService } from './army.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Army } from './entities/army.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Army])],
  providers: [ArmyService],
})
export class ArmyModule {}

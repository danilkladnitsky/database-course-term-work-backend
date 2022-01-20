import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { Module } from '@nestjs/common';
import { History } from './entities/history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Army } from 'src/army/entities/army.entity';
import { ArmyService } from 'src/army/army.service';
import { Fraction } from 'src/fraction/entities/fraction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([History]),
    TypeOrmModule.forFeature([Army]),
    TypeOrmModule.forFeature([Fraction]),
  ],
  controllers: [HistoryController],
  providers: [HistoryService, ArmyService],
})
export class HistoryModule {}

import { HistoryModule } from './history/history.module';
import { ArmyModule } from './army/army.module';
const env = require('dotenv').config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Army } from './army/entities/army.entity';
import { Fraction } from './fraction/entities/fraction.entity';
import { History } from './history/entities/history.entity';
import { Ability } from './perk/entities/ability.entity';
import { Artifact } from './perk/entities/artifact.entity';
import { Hero } from './hero/entity/hero.entity';
import { Unit } from './unit/entity/unit.entity';
import { UnitsModule } from './unit/units.module';
import { HeroModule } from './hero/hero.module';
import ObjectModule from './object/object.module';
import { Location } from './object/entities/location.entity';
import { Fort } from './object/entities/fort.entity';

@Module({
  imports: [
    HistoryModule,
    ArmyModule,
    ArmyModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [
        Fraction,
        Army,
        Unit,
        Hero,
        Artifact,
        Ability,
        History,
        Location,
        Fort,
      ],
      synchronize: true,
    }),
    UnitsModule,
    HeroModule,
    ObjectModule,
    ArmyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

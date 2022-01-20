import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fort } from './entities/fort.entity';
import { Location } from './entities/location.entity';
import ObjectController from './object.controller';
import ObjectService from './object.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location]),
    TypeOrmModule.forFeature([Fort]),
  ],
  controllers: [ObjectController],
  providers: [ObjectService],
})
export default class ObjectModule {}

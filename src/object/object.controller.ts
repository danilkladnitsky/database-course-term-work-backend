import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import ObjectService from './object.service';

@ApiTags('locations')
@Controller('locations')
export default class ObjectController {
  constructor(private readonly objectService: ObjectService) {}

  @Get('')
  async getLocations() {
    return await this.objectService.getLocations();
  }
}

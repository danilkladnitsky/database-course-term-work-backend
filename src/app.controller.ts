import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('ping')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  pingService(): string {
    return this.appService.pingService();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  pingService(): string {
    return 'Ok';
  }
}

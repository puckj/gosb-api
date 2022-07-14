import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private authService: AuthService) {
    super({ header: 'apiKey', prefix: '' }, true, (apikey: string, done: (arg0: boolean) => any) => {
      const checkKey = this.authService.validateApiKey(apikey);
    //   console.log(checkKey, 'checkKey');
      if (!checkKey) {
        return done(false);
      }
      return done(true);
    });
  }
}

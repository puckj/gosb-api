import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // KEYS
  private apiKeys: string[] = [process.env.API_KEY];
  
  validateApiKey(apiKey: string) {
    // console.log('apiKey => ', apiKey);
    // console.log('this.apiKeys => ', this.apiKeys);
    return this.apiKeys.find((apiK:any) => apiKey === apiK);
  }
}

import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AuthService {
  // KEYS
  constructor(private readonly dataSource: DataSource) {}
  private apiKeys: string[] = [process.env.API_KEY];

  async validateApiKey(apiKey: string) {
    return this.apiKeys.find((apiK: any) => apiKey === apiK);
  }

  async memberAuthen(member_ukey: string) {
    const query = `CALL c_member_authen('${member_ukey}',null,null);`;
    return this.dataSource
      .query(query)
      .then((result: any) => {
        if (result[0].results === 'OK') {
          // console.log(result, 'SUCCESS [memberAuthen]');
          return result[0].messages;
        } else {
          // console.error(result,'ERROR [memberAuthen]');
          throw { message: result };
        }
      })
      .catch((error: any) => {
        throw error;
      });
  }
}

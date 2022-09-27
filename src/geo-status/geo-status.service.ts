import { HttpStatus, Injectable } from '@nestjs/common';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { PriceInterface } from 'src/common/interfaces/CreatePrice';

export interface httpAdapter {
  get<T>(url: string, headers: any): Promise<T>;
}

@Injectable()
export class GeoStatusService {
  constructor(private readonly http: AxiosAdapter) {}
  async findAll(headers) {
    // const httpsAgent = new https.Agent({
    //   rejectUnauthorized: false,
    // });
    try {
      const data = await this.http.get(
        'https://bx-tracking.bluex.cl/bx-geo/states',
        // { headers, httpsAgent },
        headers,
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async create(body: PriceInterface, headers: AxiosAdapter) {
    try {
      console.log('ssss');
      const data = await this.http.post(
        'https://qaapigw.bluex.cl/api/legacy/pricing/v1',
        headers,
        body,
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw error(error);
    }
  }
}

// export class pokeApiFetchAdapter implements httpAdapter {
//   async get<T>(url: string, headers): Promise<T> {
//     const resp = await fetch(url, headers);
//     const data: T = await resp.json();

//     return data;
//   }
// }

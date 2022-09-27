import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { PriceInterface } from '../interfaces/CreatePrice';
import { HttpAdapter } from '../interfaces/http-adapter.iterface';

// export class vtex {
//   constructor(private readonly http: HttpAdapter) {}

//   async getNMoves(): Promise<any[]> {
//     // const moves = 10;
//     const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/4');
//     console.log(data);
//     return;
//   }
// }

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;
  private payload: PriceInterface;
  private headers: AxiosRequestHeaders = {
    'BX-CLIENT_ACCOUNT': '',
    'BX-TOKEN': '',
    'BX-USERCODE': '',
  };

  async get<T>(url: string, headers: any): Promise<T> {
    try {
      this.headers = headers ?? this.headers;
      const { data } = await this.axios.get<T>(url, {
        headers: this.headers,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async post(url: string, body: any, headers: any) {
    try {
      this.headers = headers ?? this.headers;
      const res = await axios.post(url, body, {
        headers,
      });
      console.log(res);
    } catch (error) {
      throw error;
    }
  }
}

// export class pokeApiAdapter implements HttpAdapter {
//   private readonly axios = axios;
//   async get<T>(url: string): Promise<T> {
//     const { data } = await this.axios.get<T>(url);
//     return data;
//   }

//   // async patch(url: string, data: any) {}
//   // async delete(url: string, data: any) {}
// }

// export class pokeApiFetchAdapter implements HttpAdapter {
//   async get<T>(url = 'https://pokeapi.co/api/v2/pokemon/4'): Promise<T> {
//     const resp = await fetch(url);
//     const data: T = await resp.json();
//     return data;
//   }
// }

// const pokeApiFetch = new pokeApiFetchAdapter();
// const charmanderFetch = new vtex(pokeApiFetch);
// console.log(charmanderFetch.getNMoves());

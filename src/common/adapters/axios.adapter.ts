import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { InternalServerErrorException } from '@nestjs/common';

export class AxiosAdapter implements HttpAdapter {
  public axios: AxiosInstance = axios;
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
}

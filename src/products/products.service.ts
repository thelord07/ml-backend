import { Injectable, NotFoundException } from '@nestjs/common';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { MlResponse } from './interfaces/ml-response.interface';
import { MLItem } from './interfaces/ml-item.interface';
import { MLItemDescription } from './interfaces/ml-item-description.interface';

@Injectable()
export class ProductsService {

  private base_url: string;

  constructor(private readonly http: AxiosAdapter) {
    this.base_url = 'https://api.mercadolibre.com';
  }

  async findAll(query) {
    const data = await this.http.get<MlResponse>(
      `${this.base_url}/sites/MLA/search?limit=4&q=${query.search}`,
    );
    const response = {
      author: {
        name: 'Joys',
        lastname: 'Florez',
      },
      categories: [],
      items: [],
    };
    data?.results.forEach((product) => {
      const item = {
        id: product.id,
        title: product.title,
        price: {
          currency: product.installments.currency_id,
          amount: product.price,
          decimals: product.installments.rate,
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
      };
      response.items.push(item);
    });

    data?.filters.forEach((filter) => {
      filter.values.forEach((value) => {
        console.log(value.name);
        response.categories.push(value?.name);
      });
    });

    return response;
  }

  async findOne(id: string) {
    const data = await this.http.get<MLItem>(
      `${this.base_url}/items/${id}`,
    );

    const { plain_text } = await this.http.get<MLItemDescription>(
      `${this.base_url}/items/${id}/description`,
    );

    const product = {
      author: {
        name: 'Joys',
        lastname: 'Florez',
      },
      item: {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: plain_text,
      },
    };

    return product;
  }
}

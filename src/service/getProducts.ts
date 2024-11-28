import { faker } from "@faker-js/faker";
import { IProduct } from "../models";

export const getProducts: () => Promise<IProduct[]> = () =>
  new Promise((resolve) => {
    const list: IProduct[] = [];

    for (let i = 0; i < 20; i++) {
      list.push({
        id: Math.floor(Math.random() * 10000),
        title: faker.commerce.productName(),
        imageURL: faker.image.urlPicsumPhotos(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      });
    }

    return setTimeout(() => {
      resolve(list);
    }, 1000);
  });

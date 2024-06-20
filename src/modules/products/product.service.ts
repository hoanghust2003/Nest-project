import { Injectable } from "@nestjs/common";
import { Product } from "src/models/product.model";

@Injectable()
export class ProductService {

  private products: Product[] = [
    { id: 1, categoryId: 1, productName: 'Product 1', price: 1000 },
    { id: 2, categoryId: 2, productName: 'Product 2', price: 2000 },
    { id: 3, categoryId: 3, productName: 'Product 3', price: 3000 },
    { id: 4, categoryId: 4, productName: 'Product 4', price: 4000 },
    { id: 5, categoryId: 5, productName: 'Product 5', price: 5000 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(): string {
      return 'CREATE A PRODUCT';
  }

  detailProduct(id: number): Product {
      return this.products.find(item => item.id === Number(id));
  }

  updateProduct(): string {
      return 'UPDATE PRODUCT';
  }
  
  deleteProduct(): string {
      return 'DELETE PRODUCT';
  }
}

import { Body, Controller, Get, Post, Put, Delete } from "@nestjs/common";

@Controller('products')
export class ProductController {

  @Get()
  getProducts(): string {
    return 'GET LIST OF PRODUCTS';
  }

  @Post()
  createProduct(): string {
      return 'CREATE A PRODUCT';
  }
  @Get('/:id')
  detailProduct(): string {
      return 'DETAIL PRODUCT';
  }
  @Put('/:id')
  updateProduct(): string {
      return 'UPDATE PRODUCT';
  }
  @Delete('/:id')
  deleteProduct(): string {
      return 'DELETE PRODUCT';
  }
}
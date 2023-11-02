import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }
  create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany({ include: { categories: true } });
  }

  async update(
    where: Prisma.ProductWhereUniqueInput,
    data: Prisma.ProductUpdateInput,
  ): Promise<Product> {
    return this.prisma.product.update({
      where,
      data,
    });
  }

  remove(where: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.delete({ where });
  }
}

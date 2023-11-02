import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import { Prisma, Blog } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(
    productWhereUniqueInput: Prisma.BlogWhereUniqueInput,
  ): Promise<Blog | null> {
    return this.prisma.blog.findUnique({
      where: productWhereUniqueInput,
    });
  }
  create(data: Prisma.BlogCreateInput) {
    return this.prisma.blog.create({ data });
  }

  findAll() {
    return this.prisma.blog.findMany();
  }

  async update(
    where: Prisma.BlogWhereUniqueInput,
    data: Prisma.BlogUpdateInput,
  ): Promise<Blog> {
    return this.prisma.blog.update({
      where,
      data,
    });
  }

  remove(where: Prisma.BlogWhereUniqueInput) {
    return this.prisma.blog.delete({ where });
  }
}

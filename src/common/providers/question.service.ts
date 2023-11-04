import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import { Prisma } from '@prisma/client';

@Injectable()
export class QuestionService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.QuestionCreateInput) {
    return this.prisma.question.create({ data });
  }

  findAll(skip: number, take: number) {
    return this.prisma.question.findMany({
      skip,
      take,
    });
  }

  remove(where: Prisma.QuestionWhereUniqueInput) {
    return this.prisma.question.delete({ where });
  }
}

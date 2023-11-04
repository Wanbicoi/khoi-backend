import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dtos';
import { QuestionService } from '../providers';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@ApiTags('questions')
@Controller('questions')
export class QuestionController {
  constructor(private readonly productService: QuestionService) {}

  @ApiBearerAuth('defaultBearerAuth')
  @Public()
  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.productService.create(createQuestionDto);
  }

  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'take', required: false })
  @Get()
  findAll(
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
    @Query('take', new DefaultValuePipe(20), ParseIntPipe) take: number,
  ) {
    return this.productService.findAll(skip, take);
  }

  @ApiBearerAuth('defaultBearerAuth')
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.productService.remove({ id });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCategoryDto } from 'src/common/dtos';
import { UpdateCategoryDto } from 'src/common/dtos';
import { CategoryService } from 'src/common/providers';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiBearerAuth('defaultBearerAuth')
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  // @Public()
  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.categoryService.findOne({ id });
  // }

  @ApiBearerAuth('defaultBearerAuth')
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update({ id }, updateCategoryDto);
  }

  @ApiBearerAuth('defaultBearerAuth')
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.categoryService.remove({ id });
  }
}

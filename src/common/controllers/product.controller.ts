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
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ProductService } from '../providers/product.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiBearerAuth('defaultBearerAuth')
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create({
      ...createProductDto,
      categories: { connect: createProductDto.categories },
    });
  }

  @Public()
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne({ id });
  }

  @ApiBearerAuth('defaultBearerAuth')
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const categories = updateProductDto.categories;
    await this.productService.update(
      { id },
      {
        ...updateProductDto,
        categories: categories ? { connect: categories } : undefined,
      },
    );
  }

  @ApiBearerAuth('defaultBearerAuth')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove({ id });
  }
}

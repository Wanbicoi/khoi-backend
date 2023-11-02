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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';
import { BlogService } from 'src/common/providers';
import { CreateBlogDto, UpdateBlogDto } from 'src/common/dtos';

@ApiTags('blogs')
@Controller('blogs')
export class BlogController {
  constructor(private readonly blogservice: BlogService) {}

  @ApiBearerAuth('defaultBearerAuth')
  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogservice.create(createBlogDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.blogservice.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.blogservice.findOne({ id });
  }

  @ApiBearerAuth('defaultBearerAuth')
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    return this.blogservice.update({ id }, updateBlogDto);
  }

  @ApiBearerAuth('defaultBearerAuth')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.blogservice.remove({ id });
  }
}

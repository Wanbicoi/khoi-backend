import { PartialType } from '@nestjs/swagger';
import { CreateBlogDto } from './';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}

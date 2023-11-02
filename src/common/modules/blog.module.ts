import { Module } from '@nestjs/common';
import { BlogService } from '../providers';
import { BlogController } from '../controllers';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}

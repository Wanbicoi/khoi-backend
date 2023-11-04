import { Module } from '@nestjs/common';
import { CommentService } from '../providers/comment.service';
import { CommentController } from '../controllers/comment.controller';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}

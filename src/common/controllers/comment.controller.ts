import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { CommentService } from '../providers/comment.service';
import { CreateCommentDto } from '../dtos';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Comment } from '@prisma/client';

@ApiTags('comment')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':productId')
  create(
    @Body() createCommentDto: CreateCommentDto,
    @Param('productId') productId: number,
  ): Promise<Comment> {
    return this.commentService.create({
      ...createCommentDto,
      product: { connect: { id: +productId } },
    });
  }
  @ApiBearerAuth('defaultBearerAuth')
  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.commentService.remove({ id });
  }
}

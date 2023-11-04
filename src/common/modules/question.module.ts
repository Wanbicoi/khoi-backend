import { Module } from '@nestjs/common';
import { QuestionController } from '../controllers';
import { QuestionService } from '../providers';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}

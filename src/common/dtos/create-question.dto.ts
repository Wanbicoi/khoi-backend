import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({ example: 'Nguyễn Tuấn Đạt' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'wanbicoi123@gmail.com' })
  @IsNotEmpty()
  identity: string;

  @ApiProperty({ example: 'Tại sao các bạn lại bán đồ ngon bổ rẻ như vậy 🤨' })
  @IsNotEmpty()
  details: string;
}

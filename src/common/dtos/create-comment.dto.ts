import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { IsNotEmpty, Max, Min } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'Chú cuội đợi chị Hằng' })
  @IsNotEmpty()
  userName: string;

  @ApiProperty({ example: '0982988123' })
  @IsNotEmpty()
  userPhone: string;

  @ApiProperty({ example: 'Sản phẩm tuyệt đỉnh cú mèo' })
  @IsNotEmpty()
  userComment: string;

  @ApiProperty({ example: 4 })
  @Max(5)
  @Min(0)
  @IsNotEmpty()
  userStar: number;
}

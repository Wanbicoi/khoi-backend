import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Banh xeo`' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '1000000' })
  @IsNotEmpty()
  price: number;
}

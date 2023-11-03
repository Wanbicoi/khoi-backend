import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Max, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Banh xeo`' })
  @IsNotEmpty()
  title: string;

  // prettier-ignore
  @ApiProperty({ example: 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. ', })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: '1000000' })
  @IsNotEmpty()
  @Max(90000000)
  @Min(0)
  price: number;

  @ApiProperty({ example: 100 })
  @IsNotEmpty()
  @Max(90000000)
  @Min(0)
  listPrice: number;

  @ApiProperty({ example: '900000' })
  @IsNotEmpty()
  details: object;

  //prettier-ignore
  @ApiProperty({ example: ['https://bestcargo.vn/wp-content/uploads/2018/06/van-chuyen-quan-ao.jpeg','https://lzd-img-global.slatic.net/g/p/09aa33c5aa229473cc000d44d40bed5d.jpg_720x720q80.jpg' ] })
  @IsNotEmpty()
  images: string[];

  @ApiProperty({ example: [100, 150] })
  @IsNotEmpty()
  weights: number[];

  @ApiPropertyOptional({ example: [{ id: 1 }, { id: 2 }] })
  @IsOptional()
  categories?: { id: number }[];
}

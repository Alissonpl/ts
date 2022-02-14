import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClinicRequest {
  @ApiProperty({ type: String, example: 'Osvaldo Diesel' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    example:
      'Av. Bento Munhoz da Rocha Neto, 750 - Zona 7, Maringá - PR, 87030-010',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ type: String, example: '51999114478' })
  @IsNotEmpty()
  @IsString()
  phones: string;

  @ApiProperty({ type: String, example: 'teste@gmail.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ type: String, example: 'osvaldo-diesel' })
  @IsNotEmpty()
  @IsString()
  aliasClinic: string;

  constructor(
    name: string,
    address: string,
    phones: string,
    email: string,
    aliasClinic: string,
  ) {
    this.name = name;
    this.address = address;
    this.phones = phones;
    this.email = email;
    this.aliasClinic = aliasClinic;
  }
}

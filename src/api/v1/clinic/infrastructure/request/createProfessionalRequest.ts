import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfessionalRequest {
  @ApiProperty({ type: String, example: 'teste@gmail.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ type: String, example: 'Alisson' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: String, example: 'Lourenco' })
  @IsNotEmpty()
  @IsString()
  familyName: string;

  @ApiProperty({ type: String, example: 'male ou female' })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({ type: String, example: '991111Pl23@', required: false })
  password: string;

  constructor(
    name: string,
    familyName: string,
    email: string,
    gender: string,
    password: string,
  ) {
    this.name = name;
    this.email = email;
    this.familyName = familyName;
    this.gender = gender;
    this.password = password;
  }
}

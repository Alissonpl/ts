import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateLinkWithClinicByEmailRequest {
  @ApiProperty({ type: String, example: 'alisson@south.com.br' })
  @IsNotEmpty()
  @IsString()
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}

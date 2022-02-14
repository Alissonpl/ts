import { ApiResponseProperty } from '@nestjs/swagger';

export class CreateProfessionalResponse {
  @ApiResponseProperty({ type: String, example: '991@11PAqa' })
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

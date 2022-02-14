import { ApiProperty } from '@nestjs/swagger';

export class ClinicWithNumberPatientsRequest {
  @ApiProperty({ type: String, example: 1 })
  page: string;

  @ApiProperty({ type: String, example: 10 })
  size: string;

  constructor(page: string, size: string) {
    this.page = page;
    this.size = size;
  }
}

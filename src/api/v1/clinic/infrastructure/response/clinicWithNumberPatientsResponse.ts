import { ApiResponseProperty } from '@nestjs/swagger';

export class ClinicWithNumberPatientsResponse {
  @ApiResponseProperty({ type: Number, example: 1 })
  id: number;

  @ApiResponseProperty({ type: String, example: 'clinic' })
  name: string;

  @ApiResponseProperty({ type: String, example: '2021-07-01T20:32:38.382Z' })
  createdAt: string;

  @ApiResponseProperty({ type: Number, example: 8 })
  usersActive: number;

  constructor(
    id: number,
    name: string,
    createdAt: string,
    usersActive: number,
  ) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.usersActive = usersActive;
  }
}

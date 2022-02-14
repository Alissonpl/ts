import { ApiResponseProperty } from '@nestjs/swagger';

export class AccessGroupByClinicIdResponse {
  @ApiResponseProperty({ type: Number, example: 1 })
  id: number;

  @ApiResponseProperty({ type: String, example: 'clinic' })
  name: string;

  @ApiResponseProperty({ type: Boolean, example: true })
  isAdmin: boolean;

  @ApiResponseProperty({ type: String, example: '2021-07-01T20:32:38.382Z' })
  createdAt: string;

  @ApiResponseProperty({ type: String, example: '2021-07-01T20:32:38.382Z' })
  modifiedAt: string;

  constructor(
    id: number,
    name: string,
    isAdmin: boolean,
    createdAt: string,
    modifiedAt: string,
  ) {
    this.id = id;
    this.name = name;
    this.isAdmin = isAdmin;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
  }
}

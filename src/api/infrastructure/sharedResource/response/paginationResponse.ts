import { ApiResponseProperty } from '@nestjs/swagger';

export class PaginationResponse {
  @ApiResponseProperty({ type: Number, example: 8 })
  total: number;

  @ApiResponseProperty({ type: Number, example: 1 })
  currentPage: number;

  @ApiResponseProperty({ type: Number, example: 2 })
  to: number;

  @ApiResponseProperty({ type: Number, example: 8 })
  from: number;

  @ApiResponseProperty({ type: Number, example: 8 })
  lastPage: number;

  @ApiResponseProperty({ type: 'any' })
  data: any;

  constructor(
    total: number,
    currentPage: number,
    to: number,
    from: number,
    lastPage: number,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    data: any,
  ) {
    this.total = total;
    this.currentPage = currentPage;
    this.to = to;
    this.from = from;
    this.lastPage = lastPage;
    this.data = data;
  }
}

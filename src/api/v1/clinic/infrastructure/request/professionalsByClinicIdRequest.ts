import { ApiProperty } from '@nestjs/swagger';
import { OrderQueryEnum } from '../../../../../infra/enums/order-query.enum';
import { SortUserEnum } from '../../../../../infra/enums/sort-user.enum';

export class ProfessionalsByClinicIdRequest {
  @ApiProperty({ type: String, example: 1 })
  page: string;

  @ApiProperty({ type: String, example: 10 })
  size: string;

  @ApiProperty({ enum: SortUserEnum })
  sort: string;

  @ApiProperty({ enum: OrderQueryEnum })
  order: string;

  constructor(page: string, size: string, sort: string, order: string) {
    this.page = page;
    this.size = size;
    this.sort = sort;
    this.order = order;
  }
}

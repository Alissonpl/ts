import { ApiResponseProperty } from '@nestjs/swagger';

export class CreateLinkWithClinicByEmailResponse {
  @ApiResponseProperty({
    type: Number,
    example: '394b0abf-8555-44bc-a261-ecc0396bef80',
  })
  userSub: string;

  @ApiResponseProperty({ type: Number, example: 15 })
  groupId: number;

  @ApiResponseProperty({ type: Number, example: 8 })
  userGroupId: number;

  @ApiResponseProperty({ type: String, example: '2021-07-01T20:32:38.382Z' })
  createdAt: string;

  @ApiResponseProperty({ type: String, example: '2021-07-01T20:32:38.382Z' })
  modifiedAt: string;

  constructor(
    userSub: string,
    groupId: number,
    userGroupId: number,
    createdAt: string,
    modifiedAt: string,
  ) {
    this.userSub = userSub;
    this.groupId = groupId;
    this.userGroupId = userGroupId;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
  }
}

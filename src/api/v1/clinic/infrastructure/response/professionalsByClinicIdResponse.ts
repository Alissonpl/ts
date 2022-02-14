import { ApiResponseProperty } from '@nestjs/swagger';

export class ProfessionalsByClinicIdResponse {
  @ApiResponseProperty({ type: Number, example: 1 })
  id: number;

  @ApiResponseProperty({
    type: String,
    example: 'f076-f3c-72d-b88-03c634',
  })
  sub: string;

  @ApiResponseProperty({ type: String, example: 'João' })
  name: string;

  @ApiResponseProperty({ type: String, example: 'de Quadros' })
  familyName: string;

  @ApiResponseProperty({
    type: String,
    example: 'teste@southsystem.com.br',
  })
  email: string;

  @ApiResponseProperty({ type: String, example: '5199911445577' })
  phone: string;

  @ApiResponseProperty({ type: Boolean, example: true })
  active: boolean;

  @ApiResponseProperty({ type: String, example: 'TI' })
  profession: string;

  @ApiResponseProperty({ type: String, example: '2021-05-25T11:15:24.101Z' })
  createdAt: string;

  @ApiResponseProperty({ type: String, example: '2021-05-25T11:15:24.101Z' })
  modifiedAt: string;

  @ApiResponseProperty({ type: String, example: 'RS' })
  state: string;

  @ApiResponseProperty({ type: String, example: 'Itaubal' })
  city: string;

  @ApiResponseProperty({ type: String, example: 'Linha Cafe' })
  country: string;

  @ApiResponseProperty({ type: String, example: 'Aqdde' })
  userCode: string;

  @ApiResponseProperty({ type: String, example: 'male' })
  gender: string;

  constructor(
    id: number,
    userCode: string,
    sub: string,
    name: string,
    familyName: string,
    email: string,
    phone: string,
    active: boolean,
    profession: string,
    createdAt: string,
    modifiedAt: string,
    state: string,
    city: string,
    country: string,
    gender: string,
  ) {
    this.id = id;
    this.userCode = userCode;
    this.sub = sub;
    this.name = name;
    this.familyName = familyName;
    this.email = email;
    this.phone = phone;
    this.active = active;
    this.profession = profession;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.state = state;
    this.city = city;
    this.country = country;
    this.gender = gender;
  }
}

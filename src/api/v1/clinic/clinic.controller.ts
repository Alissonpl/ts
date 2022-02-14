import {
  Controller,
  UseFilters,
  Get,
  Query,
  Body,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { BadRequestExceptionFilter } from 'src/infra/exceptions/bad-request-exception.filter';
import { BusinessExceptionFilter } from 'src/infra/exceptions/business-exception.filter';
import { HttpExceptionFilter } from 'src/infra/exceptions/http-exception.filter';
import { ClinicWithNumberPatientsResponse } from './infrastructure/response/clinicWithNumberPatientsResponse';
import { ClinicService } from './clinic.service';
import { PaginationResponse } from './infrastructure/response/paginationResponse';
import { ClinicWithNumberPatientsRequest } from './infrastructure/request/clinicWithNumberPatientsRequest';
import { clinicPageExample } from './infrastructure/example/clinicPageExample';
import { CreateClinicRequest } from './infrastructure/request/createClinicRequest';
import { ProfessionalsByClinicIdRequest } from './infrastructure/request/professionalsByClinicIdRequest';
import { ProfessionalsByClinicIdResponse } from './infrastructure/response/professionalsByClinicIdResponse';
import { professionalPageExample } from './infrastructure/example/professionalPageExample';
import { CreateLinkWithClinicByEmailResponse } from './infrastructure/response/createLinkWithClinicByEmailResponse';
import { CreateLinkWithClinicByEmailRequest } from './infrastructure/request/createLinkWithClinicByEmailRequest';
import { AccessGroupByClinicIdResponse } from './infrastructure/response/accessGroupByClinicIdResponse';
import { CreateProfessionalRequest } from './infrastructure/request/createProfessionalRequest';
import { CreateProfessionalResponse } from './infrastructure/response/createProfessionalResponse';
@Controller()
@ApiTags('Clinic')
@UseFilters(
  HttpExceptionFilter,
  BadRequestExceptionFilter,
  BusinessExceptionFilter,
)
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Get()
  @ApiOkResponse({
    description: 'Success',
    type: String,
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  async getClinicWithNumberPatients(): Promise<string> {
    return await this.clinicService.getOnClinic();
  }
}

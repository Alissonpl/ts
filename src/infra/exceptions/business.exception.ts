import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessException extends HttpException {
  static INVALID_IDENTIFIER = 'Invalid identifier';
  static THERE_IS_ALIAS_CLINIC_OR_EMAIL =
    'there is aliasClinic or email with this description';
  static NOT_FOUND_CLINIC = 'Not found clinic';
  static NOT_FOUND_CLINIC_AUTH_GROUP = 'Not found clinic authorization group';
  static NOT_FOUND_PROFESSIONAL = 'Not found professional';

  constructor(message?: string, statusCode?: number) {
    super(
      message || 'BusinessException',
      statusCode || HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}

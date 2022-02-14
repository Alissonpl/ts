import { PaginationResponse } from '../response/paginationResponse';
import { ProfessionalsByClinicIdResponse } from '../response/professionalsByClinicIdResponse';

export const professionalPageExample = (): PaginationResponse<
  ProfessionalsByClinicIdResponse[]
> => {
  return new PaginationResponse(5, 2, 1, 1, 2, [
    new ProfessionalsByClinicIdResponse(
      102,
      'QQZLTqqq',
      '05e28-878f-463-a5-ab086b0d',
      'Aron',
      'Rodrigues',
      'teste@gmail.com',
      null,
      true,
      null,
      '2021-08-10T18:59:41.414Z',
      '2021-08-10T18:59:41.414Z',
      'BA',
      null,
      null,
      'male',
    ),
  ]);
};

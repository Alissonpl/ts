import { ClinicWithNumberPatientsResponse } from '../response/clinicWithNumberPatientsResponse';
import { PaginationResponse } from '../response/paginationResponse';

export const clinicPageExample =
  (): PaginationResponse<ClinicWithNumberPatientsResponse> => {
    return new PaginationResponse(
      5,
      2,
      1,
      1,
      2,
      new ClinicWithNumberPatientsResponse(
        1,
        'clinic',
        '2021-07-01T20:32:38.382Z',
        8,
      ),
    );
  };

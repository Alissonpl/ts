import { ClinicWithNumberPatientsResponse } from '../response/clinicWithNumberPatientsResponse';
import { PaginationResponse } from '../response/paginationResponse';
export default class ClinicMapper {
  static entityAllToResponseAll(
    entitys: Array<{
      id: number;
      name: string;
      createdAt: string;
      usersActive?: number;
    }>,
    pagination: {
      total: number;
      to: number;
      from: number;
      currentPage: number;
      lastPage: number;
    },
  ): PaginationResponse<ClinicWithNumberPatientsResponse> {
    const responseMapper = entitys.map((i) => {
      return new ClinicWithNumberPatientsResponse(
        i.id,
        i.name,
        i.createdAt,
        i.usersActive,
      );
    });
    return new PaginationResponse(
      pagination.total,
      pagination.currentPage,
      pagination.to,
      pagination.from,
      pagination.lastPage,
      responseMapper,
    );
  }
}

import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { ClinicModule } from './v1/clinic/clinic.module';
import { V1Module } from './v1/v1.module';

const routes: Routes = [
  {
    path: '/backoffice',
    children: [
      {
        path: '/v1',
        module: V1Module,
        children: [
          {
            path: '/clinic',
            module: ClinicModule,
          },
        ],
      },
    ],
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), V1Module],
})
export class ApiModule {}

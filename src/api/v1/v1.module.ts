import { Module } from '@nestjs/common';

import { InfraModule } from '../../infra/infra.module';
import { ClinicModule } from './clinic/clinic.module';
@Module({
  imports: [InfraModule, ClinicModule],
})
export class V1Module {}

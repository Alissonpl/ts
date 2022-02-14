import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { ClinicController } from './clinic.controller';
import { ClinicService } from './clinic.service';

@Module({
  controllers: [ClinicController],
  providers: [ClinicService],
  imports: [InfraModule, ClinicService],
})
export class ClinicModule {}

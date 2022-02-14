import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';

export function TransformToInt(): any {
  return applyDecorators(
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
  );
}

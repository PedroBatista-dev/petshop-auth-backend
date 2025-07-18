// src/pais/dto/update-pais.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreatePaisDto } from './create-pais.dto';
import { AuditableDto } from '../../common/audit/audit.interceptor';

export class UpdatePaisDto
  extends PartialType(CreatePaisDto)
  implements AuditableDto
{
  updateId?: string;
}

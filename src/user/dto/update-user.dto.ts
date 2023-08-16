import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UUID } from 'crypto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: UUID;
}

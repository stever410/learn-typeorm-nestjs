import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dto/create-user.dto';
import User from '../entities/user.entity';

@Injectable()
export class UserMapper {
  toEntity(dto: CreateUserDto): User {
    return plainToClass(User, dto);
  }

  toDto(entity: User): CreateUserDto {
    return plainToClass(CreateUserDto, entity);
  }
}

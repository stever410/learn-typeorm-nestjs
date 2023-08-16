import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
import { UserMapper } from './mapper/user.mapper';

@Injectable()
export class UserService {
  constructor(
    private readonly userMapper: UserMapper,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const userEntity = this.userMapper.toEntity(createUserDto);
    this.usersRepository.save(userEntity);
    return userEntity;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: UUID) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}

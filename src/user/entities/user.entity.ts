import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'app_user',
})
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'active', default: true })
  isActive: boolean;
}

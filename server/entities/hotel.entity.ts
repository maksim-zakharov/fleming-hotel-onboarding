import { Column, Entity, BaseEntity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StaffMemberEntity } from './staff-member.entity';
import { v4 as uuid4 } from 'uuid';

@Entity('hotels')
export class HotelEntity extends BaseEntity {
  @PrimaryGeneratedColumn ({
    type: 'int',
  })
  public id: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  name: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  nameArabic: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  website: string;

  @Column({
    type: 'varchar',
  })
  governorate: string;

  @Column({
    type: 'varchar',
  })
  city: string;

  @Column({
    type: 'int',
  })
  rating: number;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'text',
  })
  descriptionArabic: string;
  // Legal

  @Column({
    type: 'text',
  })
  legalName: string;

  @Column({
    type: 'text',
  })
  crNumber: string;

  @Column({
    type: 'text',
  })
  crPerson: string;

  @Column({
    type: 'text',
  })
  crDetails: string;

  @Column({
    type: 'text',
  })
  signatoryName: string;

  @Column({
    type: 'text',
  })
  signatoryPhoneNumber: string;

  @Column({
    type: 'text',
  })
  signatoryEmail: string;

  // @Column({
  //   type: 'text',
  // })
  // crUrls: string[];
  // Bank

  @Column({
    type: 'text',
  })
  bankName: string;

  @Column({
    type: 'text',
  })
  branch: string;

  @Column({
    type: 'text',
  })
  accountNumber: string;
  // Focal

  @Column({
    type: 'text',
  })
  focalName: string;

  @Column({
    type: 'text',
  })
  focalEmail: string;

  @Column({
    type: 'text',
  })
  focalPhoneNumber: string;

  @OneToMany(() => StaffMemberEntity, (v) => v.hotel, { cascade: true })
  members: StaffMemberEntity[];
  // roomTypes: {
  //   type: string;
  //   beds: number;
  //   roomsCount: number;
  //   price: number;
  //   description: string;
  //   descriptionArabic: string;
  // }[];
}

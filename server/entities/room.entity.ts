import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { HotelEntity } from './hotel.entity';

@Entity('rooms')
export class RoomEntity extends BaseEntity {
  @PrimaryGeneratedColumn ({
    type: 'int',
  })
  public id: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  type: string;

  @Column({
    type: 'varchar',
  })
  typeArabic: string;

  @Column({
    type: 'int',
  })
  beds: string;

  @Column({
    type: 'int',
  })
  rooms: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
  })
  price: number;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'text',
  })
  descriptionArabic: string;

  // @ManyToOne(() => HotelEntity, (v) => v.rooms, { onDelete: 'CASCADE' })
  // hotel: HotelEntity;
}

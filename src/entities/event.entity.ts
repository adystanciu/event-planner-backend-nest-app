import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('EVENT')
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  url: string;

  @Column({nullable: true , name: "start_date"})
  startDate: Date;

  @Column({nullable: true , name: "end_date"})
  endDate: Date;
}
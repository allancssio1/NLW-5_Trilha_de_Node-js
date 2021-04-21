import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { User } from "./Users";

@Entity("message")
class Message { 
  @PrimaryColumn()
  id: string

  @Column()
  admin_id: string

  @Column()
  text: string

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User

  @Column()
  user_id: string

  @CreateDateColumn()
  created_at: Date

  construtor() {
    if(!this.id) {
      this.id = uuid()
    } 
  }

}


export { Message }
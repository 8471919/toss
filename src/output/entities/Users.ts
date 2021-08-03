import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Moneys } from "./Moneys";

@Index("EMAIL_UNIQUE", ["email"], { unique: true })
@Entity("users", { schema: "toss" })
export class Users {
    @PrimaryGeneratedColumn({ type: "int", name: "ID" })
    id: number;

    @Column("varchar", {
        name: "EMAIL",
        unique: true,
        length: 45,
        nullable: false,
    })
    email: string;

    @Column("varchar", { name: "PASSWORD", length: 100, nullable: false })
    password: string;

    @OneToMany(() => Moneys, (moneys) => moneys.users)
    moneys: Moneys[];
}

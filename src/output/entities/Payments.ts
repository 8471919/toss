import { Column, Entity, OneToMany } from "typeorm";
import { Moneys } from "../../money/entities/Moneys";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity("payments", { schema: "toss" })
export class Payments {
    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;

    @Column("varchar", { name: "NAME", length: 20 })
    name: string;

    @OneToMany(() => Moneys, (moneys) => moneys.payment)
    money: Moneys[];
}

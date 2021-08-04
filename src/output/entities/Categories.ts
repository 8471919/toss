import { Column, Entity, OneToMany } from "typeorm";
import { Moneys } from "./Moneys";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity("categories", { schema: "toss" })
export class Categories {
    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;

    @Column("varchar", { name: "NAME", length: 20 })
    name: string;

    @OneToMany(() => Moneys, (moneys) => moneys.category)
    moneys: Moneys[];
}

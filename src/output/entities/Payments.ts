import { Column, Entity, OneToMany } from "typeorm";
import { Moneys } from "./Moneys";

@Entity("payments", { schema: "toss" })
export class Payments {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("varchar", { name: "NAME", length: 20 })
  name: string;

  @OneToMany(() => Moneys, (moneys) => moneys.payments)
  moneys: Moneys[];
}

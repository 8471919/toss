import { Column, Entity, OneToMany } from "typeorm";
import { Moneys } from "./Moneys";

@Entity("categories", { schema: "toss" })
export class Categories {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("varchar", { name: "NAME", length: 20 })
  name: string;

  @OneToMany(() => Moneys, (moneys) => moneys.category)
  moneys: Moneys[];
}

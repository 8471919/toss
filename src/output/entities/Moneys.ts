import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Categories } from "./Categories";
import { Payments } from "./Payments";
import { Users } from "../../user/entities/Users";

@Index("fk_MONEYS_CATEGORIES1_idx", ["categoryId"], {})
@Index("fk_MONEYS_PAYMENTS1_idx", ["paymentsId"], {})
@Index("fk_MONEYS_USERS1_idx", ["userId"], {})
@Entity("moneys", { schema: "toss" })
export class Moneys {
    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;

    @Column("datetime", { name: "DATE", default: () => "CURRENT_TIMESTAMP" })
    date: Date;

    @Column("tinyint", { name: "IS_INCOME", default: () => "'0'" })
    isIncome: number;

    @Column("decimal", { name: "PRICE", precision: 10, scale: 0 })
    price: string;

    @Column("int", { name: "CATEGORY_ID" })
    categoryId: number;

    @Column("int", { name: "PAYMENTS_ID" })
    paymentsId: number;

    @Column("int", { name: "USER_ID" })
    userId: number;

    @ManyToOne(() => Categories, (categories) => categories.moneys, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "CATEGORY_ID", referencedColumnName: "id" }])
    category: Categories;

    @ManyToOne(() => Payments, (payments) => payments.moneys, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "PAYMENTS_ID", referencedColumnName: "id" }])
    payments: Payments;

    @ManyToOne(() => Users, (users) => users.moneys, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "USER_ID", referencedColumnName: "id" }])
    users: Users;
}

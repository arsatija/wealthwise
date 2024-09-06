import {
  pgTable,
  uuid,
  varchar,
  decimal,
  date,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const recurringIncome = pgTable("recurring_income", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  source: varchar("source", { length: 255 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  frequency: varchar("frequency", { length: 50 }).notNull(),
  nextPayday: date("next_payday").notNull(),
  active: boolean("active").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

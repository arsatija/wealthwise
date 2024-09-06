import {
  pgTable,
  varchar,
  decimal,
  date,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";
import { budgets } from "./budgets";
import { users } from "./users";

export const expenses = pgTable("expenses", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  budgetId: uuid("budget_id").references(() => budgets.id),
  category: varchar("category", { length: 255 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  description: varchar("description"),
  date: date("date").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

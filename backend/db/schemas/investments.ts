import {
  pgTable,
  uuid,
  varchar,
  decimal,
  date,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const investments = pgTable("investments", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  investmentType: varchar("investment_type", { length: 255 }).notNull(),
  initialValue: decimal("initial_value", { precision: 10, scale: 2 }).notNull(),
  currentValue: decimal("current_value", { precision: 10, scale: 2 }).notNull(),
  dateInvested: date("date_invested").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

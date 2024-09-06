import {
  pgTable,
  uuid,
  varchar,
  decimal,
  date,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const income = pgTable("income", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  source: varchar("source", { length: 255 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  dateReceived: date("date_received").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

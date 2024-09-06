import {
  pgTable,
  uuid,
  varchar,
  decimal,
  date,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const savings = pgTable("savings", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  goalName: varchar("goal_name", { length: 255 }).notNull(),
  targetAmount: decimal("target_amount", { precision: 10, scale: 2 }).notNull(),
  currentAmount: decimal("current_amount", {
    precision: 10,
    scale: 2,
  }).notNull(),
  startDate: date("start_date").notNull(),
  targetDate: date("target_date").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

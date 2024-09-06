import {
  pgTable,
  uuid,
  varchar,
  decimal,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const budgets = pgTable("budgets", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  category: varchar("category", { length: 255 }).notNull(),
  limit: decimal("limit", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

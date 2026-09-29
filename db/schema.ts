import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const entries = sqliteTable("entries", {
 id: text("id").primaryKey(), kind: text("kind").notNull(), title: text("title").notNull(),
 body: text("body").notNull().default(""), image: text("image").notNull().default(""),
 date: text("date").notNull(), published: integer("published").notNull().default(0),
 updated: text("updated").notNull()
});
export const settings = sqliteTable("settings", {id:text("id").primaryKey(), value:text("value").notNull()});

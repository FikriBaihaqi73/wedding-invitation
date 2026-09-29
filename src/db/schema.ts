import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

// Tabel tamu undangan, menggunakan slug unik untuk link undangan masing-masing
export const guests = pgTable("guests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).unique().notNull(), // contoh: "budi-santoso"
  createdAt: timestamp("created_at").defaultNow(),
});

// Tabel komentar dari para tamu
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  guestId: serial("guest_id").references(() => guests.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

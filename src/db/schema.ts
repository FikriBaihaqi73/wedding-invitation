import { pgTable, serial, integer, varchar, text, timestamp } from "drizzle-orm/pg-core";

// Tabel tamu undangan, menggunakan slug unik untuk link undangan masing-masing
export const guests = pgTable("guests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).unique().notNull(), // contoh: "budi-santoso"
  createdAt: timestamp("created_at").defaultNow(),
});

// Tabel komentar & RSVP dari para tamu
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  guestId: integer("guest_id").references(() => guests.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  attendance: varchar("attendance", { length: 50 }).notNull().default('hadir'), // status kehadiran (hadir, tidak_hadir, dsb)
  createdAt: timestamp("created_at").defaultNow(),
});

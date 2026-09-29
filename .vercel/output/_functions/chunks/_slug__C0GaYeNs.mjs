import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { S as createAstro, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_Bo5U7Ddk.mjs";
import { t as createComponent } from "./compiler_D0z-3r5Z.mjs";
import { a as $$Wishes, c as $$Couple, d as $$Layout, i as $$Gift, l as $$Hero, n as $$Navbar, o as $$Gallery, r as $$MusicPlayer, s as $$EventDetails, t as $$Footer, u as $$OpeningCover } from "./Footer_DXBvpQDv.mjs";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";
//#region src/db/schema.ts
var schema_exports = /* @__PURE__ */ __exportAll({
	comments: () => comments,
	guests: () => guests
});
var guests = pgTable("guests", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	slug: varchar("slug", { length: 255 }).unique().notNull(),
	createdAt: timestamp("created_at").defaultNow()
});
var comments = pgTable("comments", {
	id: serial("id").primaryKey(),
	guestId: serial("guest_id").references(() => guests.id, { onDelete: "cascade" }),
	message: text("message").notNull(),
	attendance: varchar("attendance", { length: 50 }).notNull().default("hadir"),
	createdAt: timestamp("created_at").defaultNow()
});
//#endregion
//#region src/db/index.ts
var connectionString = typeof import.meta !== "undefined" && Object.assign({
	"ASSETS_PREFIX": void 0,
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SITE": void 0,
	"SSR": true
}, { DATABASE_URL: "postgresql://postgres:root@localhost:5432/wedding" }) ? "postgresql://postgres:root@localhost:5432/wedding" : process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is not defined in your environment variables");
var client = postgres(connectionString, { prepare: false });
var db = drizzle(client, { schema: schema_exports });
//#endregion
//#region src/pages/to/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	let guestName = "Tamu Undangan";
	let guestId = void 0;
	if (slug) try {
		const foundGuest = await db.query.guests.findFirst({ where: eq(guests.slug, slug) });
		if (foundGuest) {
			guestName = foundGuest.name;
			guestId = foundGuest.id;
		} else guestName = slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
	} catch (err) {
		guestName = slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "The Wedding of Bagas & Sarah",
		"guestName": guestName
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "OpeningCover", $$OpeningCover, { "guestName": guestName })}${renderComponent($$result, "MusicPlayer", $$MusicPlayer, {})}${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="min-h-screen">${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Couple", $$Couple, {})}${renderComponent($$result, "EventDetails", $$EventDetails, {})}${renderComponent($$result, "Gallery", $$Gallery, {})}${renderComponent($$result, "Wishes", $$Wishes, {
		"guestName": guestName,
		"guestId": guestId
	})}${renderComponent($$result, "Gift", $$Gift, {})}${renderComponent($$result, "Footer", $$Footer, {})}</main>` })}`;
}, "D:/proyek/wedding-app/src/pages/to/[slug].astro", void 0);
var $$file = "D:/proyek/wedding-app/src/pages/to/[slug].astro";
var $$url = "/to/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/to/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };

import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { S as createAstro, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_Bo5U7Ddk.mjs";
import { t as createComponent } from "./compiler_D0z-3r5Z.mjs";
import { a as $$Wishes, c as $$Couple, d as $$Layout, i as $$Gift, l as $$Hero, n as $$Navbar, o as $$Gallery, r as $$MusicPlayer, s as $$EventDetails, t as $$Footer, u as $$OpeningCover } from "./Footer_DXBvpQDv.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const url = new URL(Astro.request.url);
	const guestParam = url.searchParams.get("to") || url.searchParams.get("guest");
	const guestName = guestParam ? decodeURIComponent(guestParam) : "Tamu Undangan";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "The Wedding of Bagas & Sarah",
		"guestName": guestName
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "OpeningCover", $$OpeningCover, { "guestName": guestName })}${renderComponent($$result, "MusicPlayer", $$MusicPlayer, {})}${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="min-h-screen">${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Couple", $$Couple, {})}${renderComponent($$result, "EventDetails", $$EventDetails, {})}${renderComponent($$result, "Gallery", $$Gallery, {})}${renderComponent($$result, "Wishes", $$Wishes, { "guestName": guestName !== "Tamu Undangan" ? guestName : "" })}${renderComponent($$result, "Gift", $$Gift, {})}${renderComponent($$result, "Footer", $$Footer, {})}</main>` })}`;
}, "D:/proyek/wedding-app/src/pages/index.astro", void 0);
var $$file = "D:/proyek/wedding-app/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };

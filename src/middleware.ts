import { defineMiddleware } from "astro:middleware";
import { verifySession } from "./lib/auth";

export const onRequest = defineMiddleware(async ({ url, cookies, redirect }, next) => {
  if (url.pathname.startsWith('/admin')) {
    if (url.pathname === '/admin/login') {
      return next();
    }
    const sessionToken = cookies.get('admin_session')?.value;
    if (!sessionToken) {
      return redirect('/admin/login');
    }
    const session = await verifySession(sessionToken);
    if (!session) {
      return redirect('/admin/login');
    }
  }
  return next();
});

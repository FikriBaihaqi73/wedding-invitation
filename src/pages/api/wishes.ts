import type { APIRoute } from 'astro';
import { db } from '../../db';
import { comments } from '../../db/schema';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const guestIdStr = data.get('guestId')?.toString();
    const message = data.get('message')?.toString();
    const attendance = data.get('attendance')?.toString();

    if (!message || !attendance) {
      return new Response(JSON.stringify({ error: 'Data tidak lengkap' }), { status: 400 });
    }

    const guestId = guestIdStr ? parseInt(guestIdStr, 10) : undefined;

    await db.insert(comments).values({
      guestId: guestId && !isNaN(guestId) ? guestId : undefined,
      message,
      attendance,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error saving wish:', error);
    return new Response(JSON.stringify({ error: 'Gagal menyimpan ucapan' }), { status: 500 });
  }
};

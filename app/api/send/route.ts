import { sendThankYouEmail } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        if (!email) {
            return new Response(JSON.stringify({ error: "Missing email" }), { status: 400 });
        }

        const result = await sendThankYouEmail(email);

        if (!result.success) {
            return new Response(JSON.stringify({ error: result.error }), { status: 500 });
        }

        return new Response(JSON.stringify(result.data));
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
}
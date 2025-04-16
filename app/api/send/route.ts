import { Resend } from 'resend';
import ThankyouEmail from '@/emails/ThankYou';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        if (!email) {
            return new Response(JSON.stringify({ error: "Missing email" }), { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Xenon Notes <donotreply@grenishrai.icu>',
            to: [email],
            subject: 'Thank You for signing up!',
            react: ThankyouEmail(),
        });

        if (error) {
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify(data));
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
}
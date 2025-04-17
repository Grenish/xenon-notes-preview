import { Resend } from 'resend';
import ThankyouEmail from '@/emails/ThankYou';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendThankYouEmail(email: string, deleteToken?: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Xenon Notes <donotreply@grenishrai.icu>',
      to: [email],
      subject: 'Thank You for signing up!',
      react: ThankyouEmail({ deleteToken }),
    });

    if (error) {
      console.error('Failed to send email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import { v4 as uuidv4 } from 'uuid'
import { sendThankYouEmail } from '@/lib/email'

export async function POST(req: Request) {
    const { email } = await req.json()
    const deleteToken = uuidv4()

    const { data, error } = await supabase.from('waitlist').insert([
        { email, delete_token: deleteToken }
    ])

    if (error) return NextResponse.json({ error }, { status: 500 })

    try {
        const emailResult = await sendThankYouEmail(email, deleteToken);
        if (!emailResult.success) {
            console.error('Failed to send confirmation email:', emailResult.error);
        }
    } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
    }

    return NextResponse.json({
        message: 'Successfully subscribed',
        unsubscribeUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/unsubscribe?token=${deleteToken}`,
    })
}

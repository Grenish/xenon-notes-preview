import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
    const { token } = await req.json()

    const { error } = await supabase.rpc('delete_from_waitlist', { token })

    if (error) return NextResponse.json({ error }, { status: 500 })

    return NextResponse.json({ message: 'Successfully unsubscribed' })
}

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token');
    if (token && token.value === 'authenticated') {
      return NextResponse.json({ authenticated: true });
    }
    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const validEmail = 'jkskaushambi@gmail.com';
    const validPassword = 'Jksup73';

    const normalizedEmail = email ? email.trim().toLowerCase() : '';

    const isMatch =
      (normalizedEmail === validEmail.toLowerCase() && password === validPassword) ||
      (process.env.ADMIN_EMAIL && normalizedEmail === process.env.ADMIN_EMAIL.trim().toLowerCase() && password === process.env.ADMIN_PASSWORD) ||
      (!email && password === (process.env.ADMIN_PASSWORD || validPassword));

    if (isMatch) {
      const cookieStore = await cookies();
      cookieStore.set('admin_token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'अमान्य ईमेल या पासवर्ड' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: 'सर्वर त्रुटि' }, { status: 500 });
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  return NextResponse.json({ success: true });
}


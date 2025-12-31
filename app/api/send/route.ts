import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mubaidjavaid97@gmail.com'],
      subject: `New message from ${name} - Portfolio`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Portfolio Message</h1>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">Name:</strong>
              <p style="margin: 5px 0 0 0; color: #333;">${name}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">Email:</strong>
              <p style="margin: 5px 0 0 0; color: #333;">${email}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">Message:</strong>
              <p style="margin: 5px 0 0 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px;">
                This message was sent from your portfolio contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      data
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

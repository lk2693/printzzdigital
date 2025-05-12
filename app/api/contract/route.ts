import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Formulardaten aus dem Request extrahieren
    const body = await request.json();
    const { name, email, company, message, selectedPackage } = body;

    // Validierung der erforderlichen Felder
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle erforderlichen Felder aus.' },
        { status: 400 }
      );
    }

    // TODO: Hier implementieren Sie das Senden der E-Mail
    // Beispiel mit einem E-Mail-Service:
    // await sendEmail({
    //   to: 'ihre-email@domain.de',
    //   subject: `Neue Anfrage von ${name}`,
    //   html: `
    //     <h2>Neue Projektanfrage</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>E-Mail:</strong> ${email}</p>
    //     <p><strong>Firma:</strong> ${company || 'Nicht angegeben'}</p>
    //     <p><strong>Gewähltes Paket:</strong> ${selectedPackage}</p>
    //     <p><strong>Nachricht:</strong><br>${message}</p>
    //   `
    // });

    console.log('Neue Anfrage:', body); // Fürs Debugging

    return NextResponse.json(
      { 
        message: 'Anfrage erfolgreich gesendet!',
        data: body 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
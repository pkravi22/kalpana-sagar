import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;

async function getDoc() {
  const credsPath = path.join(process.cwd(), 'google-credentials.json');
  const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));

  const serviceAccountAuth = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
  await doc.loadInfo();
  return doc;
}

export async function GET() {
  const token = (await cookies()).get('admin_token');
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const doc = await getDoc();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    
    const data = rows.map(row => ({
      id: row.get('ID'),
      date: row.get('Date'),
      name: row.get('Name'),
      mobile: row.get('Mobile'),
      village: row.get('Village'),
      subject: row.get('Subject'),
      message: row.get('Message'),
      site: row.get('Site'),
      response: row.get('Response'),
      isPublic: row.get('IsPublic') === 'TRUE',
      status: row.get('Status'),
      respondedAt: row.get('RespondedAt')
    })).reverse();
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function PUT(request) {
  const token = (await cookies()).get('admin_token');
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const { id, response, isPublic, status } = body;
    
    const doc = await getDoc();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    
    const row = rows.find(r => r.get('ID') === id);
    if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    
    row.set('Response', response || row.get('Response'));
    row.set('IsPublic', isPublic ? 'TRUE' : 'FALSE');
    row.set('Status', status || row.get('Status'));
    
    if (response && !row.get('RespondedAt')) {
      row.set('RespondedAt', new Date().toISOString());
    }

    await row.save();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

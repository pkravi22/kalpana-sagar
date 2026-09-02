import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SITE_NAME = 'Kalpana Sonkar'; // Change for Jitendra

async function getDoc() {
  let creds;
  if (process.env.GOOGLE_CREDENTIALS) {
    creds = JSON.parse(process.env.GOOGLE_CREDENTIALS);
  } else {
    const credsPath = path.join(process.cwd(), 'google-credentials.json');
    creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));
  }

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
  try {
    const doc = await getDoc();
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadHeaderRow();
    const rows = await sheet.getRows();
    
    // Return all submitted rows (not just approved ones)
    const publicData = rows
      .map(row => ({
        id: row.get('ID'),
        date: row.get('Date'),
        name: row.get('Name'),
        village: row.get('Village'),
        subject: row.get('Subject'),
        message: row.get('Message'),
        response: row.get('Response'),
        respondedAt: row.get('RespondedAt'),
        site: row.get('Site'),
        status: row.get('Status') || 'Pending'
      }))
      .reverse(); // Newest first
      
    return NextResponse.json(publicData);
  } catch (error) {
    console.error('Error fetching jan sunwai:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const doc = await getDoc();
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadHeaderRow();

    const newRow = {
      ID: Date.now().toString(),
      Date: new Date().toISOString(),
      Name: body.name,
      Mobile: body.mobile,
      Village: body.village,
      Subject: body.subject,
      Message: body.message,
      Site: SITE_NAME,
      Response: '',
      IsPublic: 'FALSE',
      Status: 'Pending',
      RespondedAt: ''
    };

    await sheet.addRow(newRow);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting jan sunwai:', error);
    return NextResponse.json({ error: 'Failed to submit data' }, { status: 500 });
  }
}

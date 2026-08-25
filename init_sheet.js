import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import fs from 'fs';

const creds = JSON.parse(fs.readFileSync('./google-credentials.json', 'utf8'));

const serviceAccountAuth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet('1gKS4SMjDGGxYUnYvhdM0_SDerfW_PokfPMD-Kz7mmz4', serviceAccountAuth);

async function init() {
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[0];
  await sheet.setHeaderRow([
    'ID', 
    'Date', 
    'Name', 
    'Mobile', 
    'Village', 
    'Subject', 
    'Message', 
    'Site', 
    'Response', 
    'IsPublic', 
    'Status', 
    'RespondedAt'
  ]);
  console.log('Sheet initialized with headers');
}

init().catch(console.error);

import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const filePath = path.join(process.cwd(), 'enquiries.json');

    let records = [];
    if (fs.existsSync(filePath)) {
      const oldText = fs.readFileSync(filePath, 'utf8');
      records = JSON.parse(oldText);
    }

    records.push({
      name,
      email,
      message,
      submitTime: new Date().toLocaleString()
    });

    fs.writeFileSync(filePath, JSON.stringify(records, null, 2), 'utf8');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
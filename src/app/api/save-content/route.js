import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const payload = await request.json();
    const filePath = path.join(process.cwd(), 'content.json');
    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status:500 });
  }
}
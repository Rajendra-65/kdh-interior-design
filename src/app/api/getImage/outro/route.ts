import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const imageDir = path.join(process.cwd(), 'public', 'Outro');
    const filenames = fs.readdirSync(imageDir);
    const images = filenames.map((name) => `/Outro/${name}`);
    return NextResponse.json({success:true,images:images})
}
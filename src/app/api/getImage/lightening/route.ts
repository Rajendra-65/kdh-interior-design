import fs from 'fs';
import path from 'path';
import {NextResponse} from 'next/server';

export const GET = async () => {
    const imageDir = path.join(process.cwd(), 'public', 'Lightening');
    const filenames = fs.readdirSync(imageDir);
    const images = filenames.map((name) => `/Lightening/${name}`);
    return NextResponse.json({success:true,images:images})
}
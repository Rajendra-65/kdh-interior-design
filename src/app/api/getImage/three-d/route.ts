import { NextResponse } from "next/server";
import path from "path";
import fs from "fs"

export const GET = async () => {
    const imageDir = path.join(process.cwd(), 'public', 'three-d-view');
    const filenames = fs.readdirSync(imageDir);
    const images = filenames.map((name) => `/three-d-view/${name}`);
    return NextResponse.json({success:true,images:images})
}
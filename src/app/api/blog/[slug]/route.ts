import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Sanitize slug to prevent directory traversal
  const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-]/g, '');

  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'data',
    'blog',
    'posts',
    `${sanitizedSlug}.mdx`
  );

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return NextResponse.json({ content });
  } catch {
    return NextResponse.json(
      { error: 'Blog post not found' },
      { status: 404 }
    );
  }
}

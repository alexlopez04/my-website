import { NextResponse } from "next/server";
import { listImages } from "@/lib/s3";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ folder: string }> }
) {
  const { folder } = await params;

  const allowed = ["gallery", "projects", "about"];
  if (!allowed.includes(folder)) {
    return NextResponse.json({ error: "Invalid folder" }, { status: 400 });
  }

  const images = await listImages(folder);
  return NextResponse.json(images);
}

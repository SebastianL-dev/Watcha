import { EnvConfig } from "@/config/env.config";
import { api } from "@/services/axios.config";
import { NextRequest, NextResponse } from "next/server";

const env = EnvConfig;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const type = searchParams.get("type");
  const id = searchParams.get("id");

  if (!type)
    return NextResponse.json(
      { error: "Media type is required to get details.", status: 400 },
      { status: 400 }
    );

  if (!id)
    return NextResponse.json(
      { error: "Media ID is required to get details.", status: 400 },
      { status: 400 }
    );

  try {
    const response = await api.get(
      `/${type}/${id}?api_key=${env.api_key}&language=en-US`
    );

    return NextResponse.json(response.data, {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch details: ${error}`, status: 500 },
      { status: 500 }
    );
  }
}

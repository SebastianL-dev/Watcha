import { EnvConfig } from "@/config/env.config";
import { api } from "@/services/axios.config";
import { NextRequest, NextResponse } from "next/server";

const env = EnvConfig;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id)
    return NextResponse.json(
      { error: "Media ID is required to get details.", status: 400 },
      { status: 400 }
    );

  try {
    const response = await api.get(
      `/movie/${id}/release_dates?api_key=${env.api_key}&language=en-US`
    );

    return NextResponse.json(response.data, {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch release dates: ${error}`, status: 500 },
      { status: 500 }
    );
  }
}

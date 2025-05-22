import { EnvConfig } from "@/config/env.config";
import { api } from "@/services/axios.config";
import { NextRequest, NextResponse } from "next/server";

const env = EnvConfig;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");

  if (!page)
    return NextResponse.json(
      { error: "Results page is required to get movies", status: 400 },
      { status: 400 }
    );

  try {
    const response = await api.get(
      `/discover/movie?api_key=${env.api_key}&language=en-US&page=${page}`
    );

    return NextResponse.json(response.data, {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch movies: ${error}`, status: 500 },
      { status: 500 }
    );
  }
}

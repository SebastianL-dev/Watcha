import { EnvConfig } from "@/config/env.config";
import { api } from "@/services/axios.config";
import { NextRequest, NextResponse } from "next/server";

const env = EnvConfig;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("query");
  const page = searchParams.get("page");

  if (!query)
    return NextResponse.json(
      { error: "Query is required to search media.", status: 400 },
      { status: 400 }
    );

  if (!page)
    return NextResponse.json(
      { error: "Page is required to search media.", status: 400 },
      { status: 400 }
    );

  try {
    const response = await api.get(
      `/search/multi?api_key=${env.api_key}&language=en-US&query=${query}&page=${page}`
    );

    return NextResponse.json(response.data, {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch search results: ${error}`, status: 500 },
      { status: 500 }
    );
  }
}

import { EnvConfig } from "@/config/env.config";
import { api } from "@/services/axios.config";
import { NextResponse } from "next/server";

const env = EnvConfig;

export async function GET() {
  try {
    const response = await api.get(
      `/movie/top_rated?api_key=${env.api_key}&language=en-US`
    );

    return NextResponse.json(response.data, {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch details.", status: 500 },
      { status: 500 }
    );
  }
}

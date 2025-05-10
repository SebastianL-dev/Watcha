import { EnvConfig } from "@/config/env.config";
import { api } from "@/services/axios.config";
import { NextRequest, NextResponse } from "next/server";

const env = EnvConfig;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  if (!id)
    return NextResponse.json({
      error: "Media ID is required to get details.",
      status: 400,
    });

  const response = await api.get(
    `/tv/${id}/content_ratings?api_key=${env.api_key}&language=en-US`
  );

  return NextResponse.json(response.data);
}

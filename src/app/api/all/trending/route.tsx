import { EnvConfig } from "@/config/env.config";
import { api } from "@/services/axios.config";
import { NextResponse } from "next/server";

const env = EnvConfig;

export async function GET() {
  const response = await api.get(
    `/trending/all/week?api_key=${env.api_key}&language=en-US`
  );

  return NextResponse.json(response.data);
}

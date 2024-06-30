import {NextRequest} from "next/server";
import {response} from "@/app/api/list/response";

export async function GET(request: NextRequest, context: any) {
    return new Response(JSON.stringify(response));
}
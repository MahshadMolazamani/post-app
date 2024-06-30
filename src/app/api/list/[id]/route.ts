import {NextRequest} from "next/server";
import {response} from "@/app/api/list/response";

export async function GET(request: NextRequest, {params}: { params: { id: string } }) {

    const element = response.find(item => item.id === params.id);

    if (!element) {
        return new Response(JSON.stringify({error: 'Element not found'}), {status: 404});
    }
    return new Response(JSON.stringify(element));
}

